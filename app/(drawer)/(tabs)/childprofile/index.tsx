import { router } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AppGradient from '~/components/AppGradient';
import ChildCard from '~/components/ChildCard';
import '~/global.css';
import { Button } from 'react-native-paper';

import AntDesign from '@expo/vector-icons/AntDesign';

const childprofile = () => {
  return (
    <>
      <ScrollView>
        <Text className="ml-2 mt-8 text-left text-6xl font-bold">Child Profiles</Text>
        <View className="mx-2 mt-3 flex-1 items-center justify-between">
          <ChildCard
            ChildName="Vico Sotto"
            Diagnosis="Diagnosed with ASD"
            Age={14}
            onPress={() => router.push('/childprofile/childdetails')}
          />
          <ChildCard
            ChildName="Kaela Bico"
            Diagnosis="Diagnosed with ASD"
            Age={12}
            onPress={() => console.log('pressed!')}
          />
          <ChildCard
            ChildName="Rico Baela"
            Diagnosis="Hypersensory"
            Age={9}
            onPress={() => console.log('pressed')}
          />
        </View>
      </ScrollView>
      <View className="absolute bottom-5 right-5">
        <Button
          mode="contained-tonal"
          onPress={() => router.push('/childprofile/addchildform')}
          className="items-center justify-center"
          contentStyle={{
            paddingVertical: 10,
          }}>
          <AntDesign name="plus" size={24} color="black" className="" />
        </Button>
      </View>
    </>
  );
};

export default childprofile;
