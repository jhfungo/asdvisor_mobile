import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '~/components/buttons/PrimaryButton';
import { supabase } from '~/utils/supabase';
import Toast from 'react-native-root-toast';

const recover = () => {
  const [email, setEmail] = useState<string>('');

  const onChangeEmail = (text: string) => {
    setEmail(text);
  };

  const onRecoverPassword = async () => {
    let { data, error } = await supabase.auth.resetPasswordForEmail(email);

    if (data) {
      let toast = Toast.show('Password Recovery Sent', {
        duration: Toast.durations.LONG,
        backgroundColor: '#6b21a8',
        position: -1,
      });
    }

    console.log("Data", data)
    console.log("Error", error)

    if (error) {
      let toast = Toast.show('Email is Incorrect', {
        duration: Toast.durations.LONG,
        backgroundColor: '#F32013',
        position: -1,
      });
    }
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-3 text-2xl font-bold">Recover Your Password</Text>
      <Text className="mb-4 text-lg">You'll receive an email to recover your password</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => onChangeEmail(text)}
        placeholderTextColor={'gray'}
        className="mb-3 w-4/5 rounded-t-lg border-b-2 border-b-purple-950 bg-purple-100 p-4"
      />
      <PrimaryButton onPress={() => onRecoverPassword()} title="Send" />
    </View>
  );
};

export default recover;
