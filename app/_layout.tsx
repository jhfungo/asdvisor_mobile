import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { RootSiblingParent } from 'react-native-root-siblings';
import '~/global.css';
const RootLayout = () => {
  return (
    <RootSiblingParent>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(drawer)"
          options={{
            headerShown: false,
          }}
        /> 
        <Stack.Screen
          name="login"
          options={{
            headerShown: true,
            headerTitle: 'Login',
          }}
        />
        <Stack.Screen
          name="register"
          options={{
            headerShown: true,
            headerTitle: 'Register',
          }}
        />
        <Stack.Screen
          name="recover"
          options={{
            headerShown: true,
            headerTitle: 'Recover Password',
          }}
        />
      </Stack>
    </RootSiblingParent>
  );
};

export default RootLayout;
