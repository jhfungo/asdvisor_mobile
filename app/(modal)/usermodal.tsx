import { View, Text, Image } from 'react-native';
import React from 'react';

const usermodal = () => {
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
          <Text className="mt-5 text-3xl">James Yap</Text>
        </View>
        <View className="flex flex-row items-center">
          <View className="mx-4 gap-5 ">
            <Text className="text-lg font-bold">Email</Text>
            <Text className="text-lg font-bold">Password</Text>
            <Text className="text-lg font-bold">Birthdate</Text>
            <Text className="text-lg font-bold">Contact</Text>
          </View>
          <View className="gap-5">
            <Text style={{ flexShrink: 1, width: 'auto' }} className="text-wrap text-lg">
              jhosuafungo.01@gmail.com
            </Text>
            <Text className="text-lg">password</Text>
            <Text className="text-lg">January 13, 1998</Text>
            <Text className="text-lg">0912345678</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default usermodal;
