import { View, Text, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '~/components/buttons/PrimaryButton';
import SecondaryButton from '~/components/buttons/SecondaryButton';
import Checkbox from 'expo-checkbox';
import { router, useNavigation } from 'expo-router';
import { supabase } from '~/utils/supabase';
import { TextInput } from 'react-native-paper';

const login = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isChecked, setChecked] = useState<boolean>(false);
  const [isPassCorrect, setPassCorrect] = useState<boolean>(false);
  const [isUserNameCorrect, setUserNameCorrect] = useState<boolean>(false);
  const navigation = useNavigation();

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
    // if (userName == Account.username && password == Account.password) {
    //   setUserNameCorrect(true);
    //   setPassCorrect(true);
    //   setPassword("");
    //   setUserName("");
    //   console.log("logging in");
    //   navigation.reset({
    //     index: 0,
    //     routes: [{ name: "(drawer)", params: { screen: "dashboard" } }],
    //   });
    // }
    let { data, error } = await supabase.auth.signInWithPassword({
      email: userName,
      password: password,
    });

    if (data.session?.access_token) {
      navigation.reset({
        index: 0,
        routes: [{ name: '(drawer)', params: { screen: "dashboard" }}],
      });
    } else {
      console.log('Error: ', error);
    }
    console.log('Data: ', data);
    console.log('Error: ', error);
  };

  return (
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
            secureTextEntry={true}
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
              color={'#6b21a8'}
            />
            <Text className="self-center text-base">Save Password?</Text>
          </View>
          <Pressable onPress={() => router.push('/recover')}>
            <View className="justify-center">
              <Text className="text-base">Forgot Password?</Text>
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
    </View>
  );
};

export default login;
