import { router } from 'expo-router';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import '~/global.css';

const appointment = () => {
  return (
    <ScrollView>
      <Text className="ml-2 mt-8 text-left text-6xl font-bold">Appointments</Text>
      <View className="mx-2 mt-3 flex-1 items-center">
        <Pressable onPress={() => router.push('/createappointment')}>
          <Text className="text-3xl font-bold">Create Appointments</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default appointment;
