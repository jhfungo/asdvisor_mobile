import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import '~/global.css';

const caredecision = () => {
  return (
    <ScrollView>
      <Text className="ml-2 mt-8 text-left text-6xl font-bold">Care Decision</Text>
      <View className="mx-2 mt-3 flex-1 items-center"></View>
    </ScrollView>
  );
};

export default caredecision;
