import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import { RootSiblingParent } from 'react-native-root-siblings';
import '~/global.css';
import { Button } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
const RootLayout = () => {
  return (
    <RootSiblingParent>
      <Stack
        screenOptions={{
          headerBackTitle: 'Back',
        }}>
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
          name="createpost"
          options={{
            headerShown: true,
            headerTitle: '',
            headerRight: () => (
              <Button mode='contained-tonal' onPress={() => alert('Post Created')}>Post
              </Button>
            ),
          }}
        />
        <Stack.Screen
          name="createappointment"
          options={{
            headerShown: true,
            headerTitle: 'Create Appointment',
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
        <Stack.Screen
          name="(modal)/usermodal"
          options={{ headerShown: false, presentation: 'modal' }}
        />
      </Stack>
    </RootSiblingParent>
  );
};

export default RootLayout;
