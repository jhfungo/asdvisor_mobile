import { View, Text, TurboModuleRegistry } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const ChildProfileStack = () => {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="childdetails"
        options={{
          headerShown: true,
          headerTitle: 'Child Details',
        }}
      />
      <Stack.Screen
        name="detailarticle"
        options={{
          headerTitle: 'Details',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="addchildform"
        options={{
          headerTitle: 'Add Child Profile',
          headerShown: true,
        }}
      />
    </Stack>
  );
};

export default ChildProfileStack;
