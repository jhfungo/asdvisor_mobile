import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const DailyCareLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="dailyarticles"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default DailyCareLayout;
