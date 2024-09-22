import { View, Text, Image } from 'react-native';
import React from 'react';
import { Title } from 'react-native-paper';

interface cardStyleProps {
  color?: string;
  textColor?: string;
  title: string;
}

const Card = ({ color, textColor, title }: cardStyleProps) => {
  return (
    <View className={`my-2 flex h-56 w-44 rounded-lg bg-slate-200 ${color}`}>
      <View>
        <Image
          source={require('~/assets/images/nurse.png')}
          resizeMode="contain"
          className="h-44 w-44 rounded-t-lg bg-white"
        />
      </View>
      <View className="flex-1 justify-center">
        <Text className={`flex-wrap px-5 text-center font-bold ${textColor}`}>{title}</Text>
      </View>
    </View>
  );
};

export default Card;
