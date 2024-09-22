import { router } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import Card from '~/components/Card';
import '~/global.css';

const dailycare = () => {
  return (
    <ScrollView>
      <Text className="ml-2 mt-8 text-left text-6xl font-bold">Daily Care</Text>
      <View className="mt-3 flex flex-row flex-wrap justify-evenly">
        <Pressable onPress={() => router.push("/dailycare/dailyarticles")}>
          <Card title='How to handle panic attacks' />
        </Pressable>
        <Card title='How to handle panic attacks'/>
        <Card title='How to handle panic attacks'/>
        <Card title='How to handle panic attacks'/>
        <Card title='How to handle panic attacks'/>
        <Card title='How to handle panic attacks'/>
      </View>
    </ScrollView>
  );
};

export default dailycare;
