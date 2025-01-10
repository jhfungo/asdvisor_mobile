import debounce from 'lodash.debounce';
import { View, Text, SafeAreaView, TextInput } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useFocusEffect } from 'expo-router';
import { supabase } from '~/utils/supabase';
import PrimaryButton from '~/components/buttons/PrimaryButton';
import userStore from '~/store/userStore';
import { ScrollView } from 'react-native-gesture-handler';

interface Message {
  id: string;
  message: string;
  sender_id: string;
  recipient_id: string;
  created_at: string;
}
const Chat = () => {
  const messageRef = useRef('');
  const inputRef = useRef<TextInput>(null);
  const scrollViewRef = useRef(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const userAuth = userStore((user) => user);
  const jhosuaUid = '3b5c2c2d-ea7a-4b92-9a8f-d400c5879083';
  const blueUid = '76adba5a-b47a-4bad-82c7-a38336608b1c';
  const dynamicUID = userAuth.id === jhosuaUid ? blueUid : jhosuaUid;
  const [typingUser, setTypingUser] = useState<string>('');

  useFocusEffect(
    useCallback(() => {
      const channel = supabase
        .channel('chat_changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'chat',
          },
          (payload) => {
            const newRecord = payload.new as Message;
            if (
              newRecord.recipient_id === dynamicUID ||
              newRecord.recipient_id === userAuth.id ||
              newRecord.sender_id === userAuth.id ||
              newRecord.sender_id === dynamicUID
            )
              setMessages((prev) => [...prev, newRecord]);
          }
        )
        .subscribe();

      const sub = supabase
        .channel(`typing_changes`)
        .on(
          'postgres_changes',
          {
            event: 'UPDATE',
            schema: 'public',
            table: 'typing',
            filter: `user_id=eq.${dynamicUID}`,
          },
          (payload) => {
            const { user_id, is_typing, recipient_id } = payload.new;
            setTypingUser((prev: string): string => {
              if (is_typing && prev !== user_id && recipient_id === userAuth.id) {
                return user_id;
              }

              if (!is_typing) {
                return '';
              }

              return prev;
            });
          }
        )
        .subscribe();

      return () => {
        channel.unsubscribe();
        sub.unsubscribe();
      };
    }, [])
  );

  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase.from('chat').select(
        // `*, recipient: user!chat_recipient_id_fkey(first_name, last_name), sender: user!chat_sender_id_fkey(first_name, last_name)
        //   `
        '*'
      );
      if (data) {
        setMessages(data);
      }
    };
    fetchMessages();
  }, []);

  const isTyping = debounce(async (is_typing: boolean, user_id: string, recipient_id: string) => {
    const { error } = await supabase
      .from('typing')
      .upsert({ user_id, recipient_id, is_typing }, { onConflict: ['user_id'] });

    if (error) {
      console.log('Error', error);
    }
  }, 300);

  const handleTyping = (text: string) => {
    const is_typing = text.length > 0;
    messageRef.current = text;
    isTyping(is_typing, userAuth.id, dynamicUID);
    if (text.length === 0) {
      messageRef.current = '';
      inputRef.current?.clear();
    }
  };

  const sendMessage = async () => {
    if (messageRef.current.length === 0) return;

    const { data, error } = await supabase
      .from('chat')
      .insert([{ message: messageRef.current, sender_id: userAuth.id, recipient_id: dynamicUID }]);
    messageRef.current = '';
    inputRef.current?.clear();
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() => {
            scrollViewRef.current?.scrollToEnd();
          }}
          contentContainerStyle={{ paddingBottom: 50 }}>
          {messages.length > 0 &&
            messages.map((message) => {
              if (message.sender_id === userAuth.id) {
                return (
                  <View
                    className="mx-2 my-2 min-w-0 self-start rounded-2xl bg-blue-400 px-3 py-1"
                    key={message.id}>
                    <Text className="font-semi-bold text-2xl color-white">{message.message}</Text>
                  </View>
                );
              } else {
                return (
                  <View
                    className="mx-2 my-2 min-w-0 self-end rounded-2xl bg-gray-400 px-3 py-1"
                    key={message.id}>
                    <Text className="font-semi-bold text-2xl color-white">{message.message}</Text>
                  </View>
                );
              }
            })}

          {typingUser.length > 0 && typingUser !== userAuth.id && (
            <View className="self-end pb-5 pl-2">
              <Text className="mr-2 italic">This user is typing...</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
      <View className="absolute bottom-0 w-full flex-row items-end bg-slate-200 px-3 pb-8 pt-2">
        <View className="w-3/4 justify-center">
          <TextInput
            ref={inputRef}
            onChangeText={(e) => handleTyping(e)}
            className="mx-1 text-wrap rounded-xl border border-slate-50 bg-slate-50 p-2 text-xl"
            placeholder="Send Message..."
            multiline
          />
        </View>

        <PrimaryButton
          title="Send"
          onPress={() => sendMessage()}
          containerStyles="w-1/4 mx-1 rounded-xl justify-center py-3 "
        />
      </View>
    </>
  );
};
export default Chat;
