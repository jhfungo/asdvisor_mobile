import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Image } from 'expo-image';
interface DisplayCardProps {
  title: string;
  image: string;
  author: string;
}
const DisplayCard = ({ title, image, author }: DisplayCardProps) => {
  useEffect(() => {
    Image.prefetch(image, 'memory');
  }, []);

  return (
    <View
      className="mx-5 h-96 w-96 flex-1 rounded-2xl bg-slate-400
      ">
      <Image source={{ uri: image }} contentFit="cover" className="h-full w-full rounded-2xl" />
      <View className="absolute bottom-1 left-1 w-full">
        <Text className="text-wrap px-4 text-5xl font-bold text-slate-100 shadow-sm">{title}</Text>
        <Text className="text-wrap p-4 text-xl font-bold text-slate-100 shadow-sm">
          by {author}
        </Text>
      </View>
    </View>
  );
};

export default DisplayCard;
