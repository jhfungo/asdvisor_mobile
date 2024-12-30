import { Stack } from 'expo-router';
import React from 'react';

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
