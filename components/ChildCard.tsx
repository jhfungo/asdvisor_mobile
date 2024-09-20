import { View, Text, Pressable } from 'react-native';
import React from 'react';
import AppGradient from './AppGradient';
import { Feather } from '@expo/vector-icons';

interface ChildCardProps {
  ChildName: string;
  Diagnosis: string;
  Age: number;
  onPress: () => void;
}

const ChildCard = ({ ChildName, Diagnosis, Age, onPress }: ChildCardProps) => {
  return (
    <AppGradient classStyles="py-8 px-6 flex-row justify-between mt-3" onPress={onPress}>
      <View>
        <Text className="text-4xl font-bold text-white">{ChildName}</Text>
        <Text className="text-lg font-bold text-white">{Diagnosis}</Text>
      </View>
        <View>
          <Text className="text-2xl font-bold text-white">Age</Text>
          <Text className="text-right text-4xl font-bold text-white">{Age}</Text>
        </View>
    </AppGradient>
  );
};

export default ChildCard;
