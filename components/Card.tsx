import { View, Text, Image } from 'react-native';
import React from 'react';

const Card = () => {
  return (
    <View className="my-2 flex h-56 w-44 rounded-lg bg-slate-200">
      <View>
        <Image
          source={require('~/assets/images/nurse.png')}
          resizeMode="contain"
          className="h-44 w-44 rounded-t-lg bg-white"
        />
      </View>
      <View className="flex-1 justify-center">
        <Text className="flex-wrap px-5 text-center font-bold ">Help your Child Go to Bed</Text>
      </View>
    </View>
  );
};

export default Card;
