import Checkbox from 'expo-checkbox';
import { router, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { PaperProvider, Portal, TextInput } from 'react-native-paper';

import DialogBox from '~/components/DialogBox';
import PrimaryButton from '~/components/buttons/PrimaryButton';
import SecondaryButton from '~/components/buttons/SecondaryButton';
import userStore from '~/store/userStore';
import { supabase } from '~/utils/supabase';
const Login = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isChecked, setChecked] = useState<boolean>(false);
  const [isError, setError] = useState<string>('');
  const navigation = useNavigation();

  // const queryProfile = async (id: string, email: string) => {
  //   const { data: user, error } = await supabase
  //     .from('user')
  //     .select('first_name, last_name, contact')
  //     .eq('id', id);

  //   if (user) {
  //     console.log(user);
  //     addUser(id, user[0].first_name, user[0].last_name, user[0].contact, email);
  //     console.log(user1);
  //   }
  // };

  const onChangeTextInput = (text: string, action: string): void => {
    switch (action) {
      case 'username':
        setUserName(text);
        break;
      case 'password':
        setPassword(text);
        break;
      default:
        console.log('Invalid action: ', action);
    }
  };

  const onSubmit = async (): Promise<void> => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userName,
      password,
    });

    if (data.session?.access_token) {
      navigation.reset({
        index: 0,
        routes: [{ name: '(drawer)' as never, params: { screen: 'dashboard' } }],
      });
    } else {
      console.log('Error: ', error);
      setError(error?.message || 'An Unkown Error Occured');
    }
    console.log('Data: ', data);
    console.log('Error: ', error);
  };

  return (
    <PaperProvider>
      <Portal>
        <View className="flex-1">
          <View className="flex-1 items-center justify-center">
            <Image
              source={require('../assets/images/ASDVisor_Logo_2.png')}
              resizeMode="contain"
              className="mt-10 h-44 w-full"
            />
          </View>
          <View className="mx-4 justify-center">
            <View className="mt-12">
              <TextInput
                label="Email"
                onChangeText={(text) => onChangeTextInput(text, 'username')}
                value={userName}
              />
            </View>
            <View className="mt-2">
              <TextInput
                label="Password"
                onChangeText={(text) => onChangeTextInput(text, 'password')}
                value={password}
                secureTextEntry
              />
            </View>
          </View>
          <View className="mx-8 flex-1 items-center space-y-5">
            <View className="mt-4 w-full flex-row justify-between">
              <View className="flex-row justify-center">
                <Checkbox
                  className="m-1"
                  value={isChecked}
                  onValueChange={() => setChecked(!isChecked)}
                  color="#6b21a8'"
                />
                <Text className="self-center text-base">Save Password?</Text>
              </View>
              <Pressable onPress={() => router.push('/recover')}>
                <View className="justify-center">
                  <Text className="text-base  text-blue-400 underline">Forgot Password?</Text>
                </View>
              </Pressable>
            </View>
          </View>
          <View className="flex-1 items-center">
            <PrimaryButton
              onPress={() => {
                onSubmit();
              }}
              title="Login"
            />
            <SecondaryButton
              onPress={() => {
                router.back();
              }}
              title="Cancel"
              containerStyles="mt-5"
            />
          </View>
          {isError && (
            <DialogBox
              title="Authentication Error"
              body={isError}
              toggle
              onDismiss={() => setError('')}
            />
          )}
        </View>
      </Portal>
    </PaperProvider>
  );
};

export default Login;
