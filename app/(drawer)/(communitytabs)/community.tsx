import React, { useState } from 'react';
import { Image, SafeAreaView, Text, View, Button, Pressable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PostCard from '~/components/community/PostCard';
import userStore from '~/store/userStore';

const Community = () => {
  const user = userStore((user) => user);

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </ScrollView>
  );
};

export default Community;
