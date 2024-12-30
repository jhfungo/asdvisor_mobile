import { UserMetadata } from '@supabase/supabase-js';
import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';

import userStore from '~/store/userStore';

const Usermodal = () => {
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>();
  const [user_metadata, setUserMetadata] = useState<UserMetadata>();
  const user = userStore((user) => user);
  // console.log('authSession: ', user1);

  console.log(user);
  return (
    <>
      <Text className="mb-16 ml-2 mt-8 text-left text-6xl font-bold">User Profile</Text>
      <View className="flex-1">
        <View className="mb-8 items-center justify-center">
          <Image
            source={require('~/assets/images/nurse.png')}
            resizeMode="contain"
            className="h-44 w-44 rounded-full border-4 border-8 border-purple-500 bg-white"
          />
          <Text className="mt-5 text-3xl">
            {user.firstName} {user.lastName}
          </Text>
        </View>
        <View className="flex flex-row items-center">
          <View className="mx-4 gap-5 ">
            <Text className="text-lg font-bold">Email</Text>
            <Text className="text-lg font-bold">Contact</Text>
          </View>
          <View className="gap-5">
            <Text style={{ flexShrink: 1, width: 'auto' }} className="text-wrap text-lg">
              {user.email}
            </Text>
            <Text className="text-lg">{user.contact}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Usermodal;
