import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Card from '~/components/Card';
import '~/global.css';

const dailycare = () => {
  return (
    <ScrollView>
      <Text className="ml-2 mt-8 text-left text-7xl font-bold">Daily Care</Text>
      <View className="mt-3 flex flex-row flex-wrap justify-evenly">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
    </ScrollView>
  );
};

export default dailycare;
