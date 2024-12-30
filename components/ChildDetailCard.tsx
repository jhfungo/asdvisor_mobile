import React from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native';

interface ChildDetailCardProps {
  onPress: () => void;
  url: string;
  date: string;
}

const ChildDetailCard = ({ onPress, url, date }: ChildDetailCardProps) => {
  return (
    <Pressable onPress={onPress}>
      <View className="mx-1 mt-2 h-36 w-36  overflow-hidden rounded-2xl bg-slate-600">
        <ImageBackground
          source={{ uri: url }}
          resizeMode="cover"
          className="h-full w-full items-center justify-end pb-3 ">
          <Text className="text-base font-bold text-white">{date}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

export default ChildDetailCard;
