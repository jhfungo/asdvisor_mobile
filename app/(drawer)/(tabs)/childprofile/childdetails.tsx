import { View, Text } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const ChildProfilePage = () => {
  return (
    <View className="mx-3 px-3">
      <Text className=" mt-8 text-left text-6xl font-bold">Child Details</Text>
      <View className="my-5 flex-row items-center">
        <Text className="text-5xl">Vico Sotto</Text>
        <Button mode="outlined" onPress={() => console.log('Pressed')} className="ml-12">
          Edit Profile
        </Button>
      </View>
      <View className="flex-row">
        <Text className="text-xl font-bold">Birhdate</Text>
        <Text className="pl-24 text-xl font-bold">05/12/2011</Text>
      </View>
      <View className="mt-8 flex-row">
        <Text className="text-xl font-bold">Assessment</Text>
        <View className='pr-10'>
          <Text className="ml-8 text-wrap pl-6 pr-6 text-xl font-bold">Hypersensory Overload and Autism Spectrum Disorder</Text>
        </View>
      </View>
    </View>
  );
};

export default ChildProfilePage;
