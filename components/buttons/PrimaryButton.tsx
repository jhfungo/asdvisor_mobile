import { View, Text, Pressable } from 'react-native';
import React from 'react';

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  containerStyles?: string;
}

const PrimaryButton = ({ onPress, title, containerStyles }: CustomButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`w-4/5 rounded-md bg-purple-800 p-4 ${containerStyles}`}>
      <View className="items-center">
        <Text className="text-white">{title}</Text>
      </View>
    </Pressable>
  );
};

export default PrimaryButton;
