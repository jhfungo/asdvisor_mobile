import { router } from 'expo-router';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Card from '~/components/Card';
import '~/global.css';

const appointment = () => {
  return (
    <ScrollView>
      <Text className="ml-2 mt-8 text-left text-6xl font-bold">Healthcare Experts</Text>
      <View className="mx-2 mt-3 flex-1 flex-row flex-wrap items-center justify-evenly">
        <Pressable onPress={() => router.push('/createappointment')}>
          <Card color="!bg-purple-800" textColor="!text-white" title="Dr. Jane Doe" />
        </Pressable>

        <Card color="!bg-purple-800" textColor="!text-white" title="Dr. Jane Doe" />
        <Card color="!bg-purple-800" textColor="!text-white" title="Dr. Jane Doe" />
        <Card color="!bg-purple-800" textColor="!text-white" title="Dr. Jane Doe" />
        {/* <Pressable onPress={() => router.push('/createappointment')}>
          <Text className="text-3xl font-bold">Create Appointments</Text>
        </Pressable> */}
      </View>
    </ScrollView>
  );
};

export default appointment;
