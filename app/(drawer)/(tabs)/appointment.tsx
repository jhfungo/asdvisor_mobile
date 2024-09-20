import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import '~/global.css';

const appointment = () => {
  return (
    <ScrollView>
      <Text className="ml-2 mt-8 text-left text-7xl font-bold">Appointments</Text>
      <View className="mx-2 mt-3 flex-1 items-center"></View>
    </ScrollView>
  );
};

export default appointment;
