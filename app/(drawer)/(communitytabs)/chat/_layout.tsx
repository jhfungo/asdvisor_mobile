import { View, Text, TurboModuleRegistry } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

const ChatStack = () => {
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
        name="chatmessages"
        options={({ route }) => ({
          headerShown: true,
          headerTitle: route.params?.headerTitle || 'Chat',
        })}
      />
    </Stack>
  );
};

export default ChatStack;
