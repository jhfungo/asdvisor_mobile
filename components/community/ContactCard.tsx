import { router } from 'expo-router';
import React from 'react';
import { Pressable, View, Image, Text } from 'react-native';

const ContactCard = () => {
  return (
    <View>
      <Pressable
        onPress={() =>
          router.push({ pathname: '/chat/chatmessages', params: { headerTitle: 'Jhosua Fungo' } })
        }>
        <View className="flex-row items-center gap-x-2 bg-white p-4">
          <Image source={require('assets/images/kobeni.png')} className="h-16 w-16 rounded-full" />
          <View className="flex-1">
            <Text className="text-xl font-bold">Jhosua Fungo</Text>
            <View className="flex-row justify-between">
              <Text>Last Message</Text>
              <Text>3m</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ContactCard;
