import { User } from '@supabase/supabase-js';
import { router, Stack, useNavigation } from 'expo-router';
import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import PrimaryButton from '~/components/buttons/PrimaryButton';
import SecondaryButton from '~/components/buttons/SecondaryButton';
import { supabase } from '~/utils/supabase';

export default function Home() {
  const navigation = useNavigation();
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      console.log('INSIDE:', user);
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: '(drawer)', params: { screen: 'dashboard' } }],
        });
      }
    });
  }, []);

  return (
    <>
      <View className="flex items-center justify-center">
        <Image
          source={require('~/assets/images/ASDVisor_Logo_1.png')}
          resizeMode="contain"
          className="flex h-3/5 w-3/4 justify-center"
        />
        <Text className="text-4xl font-bold">Welcome to ASDVisor</Text>
      </View>
      <View className="flex-1 items-center justify-center">
        <PrimaryButton title="Login" onPress={() => router.push('/login')} />
        <SecondaryButton
          title="Register"
          onPress={() => router.push('/register')}
          containerStyles="mt-4"
        />
      </View>
    </>
  );
}
