import { View, Text, Pressable } from 'react-native';
import React from 'react';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  containerStyles?: string;
}

const PrimaryButton = ({ onPress, title, containerStyles }: CustomButtonProps) => {
  return (
    <View className={`w-4/5 rounded-md bg-purple-800 p-4 ${containerStyles}`}>
      <Pressable className="items-center" onPress={onPress}>
        <Text className="text-white">{title}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
