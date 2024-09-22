import { View, Text, Image, ImageBackground, Pressable } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';

const ChildProfilePage = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  return (
    <>
      <ScrollView className="mx-3 px-3">
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
          <View className="pr-10">
            <Text className="ml-8 text-wrap pl-6 pr-6 text-xl font-bold">
              Hypersensory Overload and Autism Spectrum Disorder
            </Text>
          </View>
        </View>
        <View className="mt-4 flex">
          <Text className="text-3xl">Temper Tantrums</Text>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Pressable onPress={() => console.log('Pressed')}>
                <View className="mx-1 mt-2 h-36 w-36  overflow-hidden rounded-2xl bg-slate-600">
                  <ImageBackground
                    source={{ uri: 'https://loremflickr.com/320/240/kids/all' }}
                    resizeMode="cover"
                    className="h-full w-full items-center justify-end pb-3 ">
                    <Text className="text-base font-bold text-white">03/05/2023</Text>
                  </ImageBackground>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
        <View className="mt-4 flex">
          <Text className="text-3xl">Oversensitivity</Text>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Pressable onPress={() => console.log('Pressed')}>
                <View className="mx-1 mt-2 h-36 w-36  overflow-hidden rounded-2xl bg-slate-600">
                  <ImageBackground
                    source={{ uri: 'https://loremflickr.com/320/240/children/all' }}
                    resizeMode="cover"
                    className="h-full w-full items-center justify-end pb-3 ">
                    <Text className="text-base font-bold text-white">03/05/2023</Text>
                  </ImageBackground>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
        <View className="mt-4 flex">
          <Text className="text-3xl">Obsessive Interest</Text>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Pressable onPress={() => console.log('Pressed')}>
                <View className="mx-1 mt-2 h-36 w-36  overflow-hidden rounded-2xl bg-slate-600">
                  <ImageBackground
                    source={{ uri: 'https://loremflickr.com/320/240/boys,girls' }}
                    resizeMode="cover"
                    className="h-full w-full items-center justify-end pb-3 ">
                    <Text className="text-base font-bold text-white">03/05/2023</Text>
                  </ImageBackground>
                </View>
              </Pressable>
            )}
            keyExtractor={(item) => item.id}
            horizontal
          />
        </View>
      </ScrollView>
      <View className="absolute bottom-5 right-5">
        <Button
          mode="contained-tonal"
          onPress={() => console.log('Pressed')}
          className="justify-center items-center"
          contentStyle={{ 
            paddingVertical: 10,
            paddingVertical: 10,
           }}>
          <AntDesign name="plus" size={24} color="black" className=''/>
        </Button>
      </View>
    </>
  );
};

export default ChildProfilePage;
