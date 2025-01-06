import { View, Text, SafeAreaView, RefreshControl, FlatList, Pressable } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Button, TextInput } from 'react-native-paper';
import { router, useFocusEffect } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { supabase } from '~/utils/supabase';
import PrimaryButton from '~/components/buttons/PrimaryButton';
import userStore from '~/store/userStore';
import { ScrollView } from 'react-native-gesture-handler';

const Community = () => {
  const [message, setMessage] = useState('');
  const scrollViewRef = useRef(null);
  interface Message {
    id: string;
    message: string;
    sender_id: string;
    recipient_id: string;
    created_at: string;
  }

  const [messages, setMessages] = useState<Message[]>([]);
  const userAuth = userStore((user) => user);

  //jhosua uid
  const jhosuaUid = '3b5c2c2d-ea7a-4b92-9a8f-d400c5879083';
  //blue uid
  const blueUid = '76adba5a-b47a-4bad-82c7-a38336608b1c';
  const dynamicUID = userAuth.id === jhosuaUid ? blueUid : jhosuaUid;

  console.log(dynamicUID);

  useFocusEffect(
    useCallback(() => {
      const channel = supabase
        .channel('table_db_changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'chat',
          },
          (payload) => {
            let newRecord = payload.new as Message;
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
      return () => {
        channel.unsubscribe();
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
      console.log(data);
      console.log(error);
    };

    fetchMessages();
  }, []);

  const sendMessage = async () => {
    const { data, error } = await supabase
      .from('chat')
      .insert([{ message, sender_id: userAuth.id, recipient_id: dynamicUID }]);
    console.log(data);
    console.log(error);
    console.log('message :', messages);
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() => {
            scrollViewRef.current?.scrollToEnd();
          }}>
          <View className="mx-2">
            <TextInput
              value={message}
              mode="outlined"
              onChangeText={(e) => setMessage(e)}
              label={'Send Chat'}
            />
            <PrimaryButton
              title="Send"
              onPress={() => sendMessage()}
              containerStyles="w-full mt-2"
            />
          </View>
          {messages.length > 0 &&
            messages.map((message) => {
              if (message.sender_id === userAuth.id) {
                return (
                  <View
                    className="mx-2 my-2 min-w-0 self-start rounded-2xl bg-blue-400 px-3 py-1"
                    key={message.id}>
                    <Text className="mx-0 text-base color-gray-100">{message.sender_id}</Text>
                    <Text className="font-semi-bold text-2xl color-white">{message.message}</Text>
                  </View>
                );
              } else {
                return (
                  <View
                    className="mx-2 my-2 min-w-0 self-end rounded-2xl bg-gray-400 px-3 py-1"
                    key={message.id}>
                    <Text className="mx-0 text-base color-gray-100">{message.sender_id}</Text>
                    <Text className="font-semi-bold text-2xl color-white">{message.message}</Text>
                  </View>
                );
              }
            })}
        </ScrollView>
      </SafeAreaView>
      <View className="absolute bottom-5 right-5">
        <Button
          mode="contained-tonal"
          onPress={() => router.push('/createpost')}
          className="items-center justify-center"
          contentStyle={{
            paddingVertical: 10,
          }}>
          <AntDesign name="plus" size={24} color="black" className="" />
        </Button>
      </View>
    </>
  );
};

export default Community;
