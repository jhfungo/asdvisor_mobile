import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import Toast from 'react-native-root-toast';
import AppGradient from '~/components/AppGradient';
import { ScrollView } from 'react-native-gesture-handler';
import Card from '~/components/Card';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { router } from 'expo-router';
import { supabase } from '~/utils/supabase';
import userStore from '~/store/userStore';

const Dashboard = () => {
  const addUser = userStore((state) => state.setUser);
  useEffect(() => {
    const getUserMetadata = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      queryProfile(user?.id, user?.email);
    };
    const queryProfile = async (id: string | undefined, email: string | undefined) => {
      const { data: user, error } = await supabase
        .from('user')
        .select('first_name, last_name, contact, role')
        .eq('id', id);

      if (user)
        addUser(id, user[0].first_name, user[0].last_name, email, user[0].contact, user[0].role);
      console.log('DONE');
    };
    getUserMetadata();
  }, []);
  return (
    <ScrollView>
      <View className="mx-4 flex-1">
        <AppGradient classStyles="flex-row justify-center items-center mt-3">
          <View className=" ml-2 w-3/5">
            <Text className="mb-5 text-center text-xl font-bold text-white">
              Any specific problems?
            </Text>
            <Text className="text-wrap px-2 text-center text-base text-white">
              Use our Care Decision System for personalized recommendations
            </Text>
          </View>
          <View className="w-2/5">
            <Image
              source={require('~/assets/images/nurse.png')}
              resizeMode="contain"
              className="h-44 w-44"
            />
          </View>
        </AppGradient>

        {/* Upcoming Appointments */}
        <View className="mt-4 flex flex-row items-center justify-between">
          <Text className="text-2xl font-bold ">Upcoming Appointments</Text>
          <Text>View All</Text>
        </View>
        <View className="my-2 flex flex-row rounded-2xl bg-white p-2 shadow shadow-slate-200">
          <View className="flex flex-row items-center justify-center">
            <View>
              <Image
                source={require('~/assets/images/nurse.png')}
                resizeMode="contain"
                className="m-2 h-16 w-16 rounded-full bg-white"
              />
            </View>
            <View>
              <Text className="text-lg font-bold">Dr. John Doe</Text>
              <Text className="text-base">Healthcare Expert</Text>
            </View>
          </View>
          <View className="my-2 ml-3 flex flex-row items-center justify-center border-l-2 pl-3">
            <View>
              <Text className="text-base font-bold">Date</Text>
              <Text className="text-sm">20 Apr 2023</Text>
              <Text className="text-base font-bold">Time</Text>
              <Text className="text-sm">8:00 AM</Text>
            </View>
          </View>
        </View>

        {/* Community */}
        <AppGradient classStyles="mt-3" onPress={() => router.push('/community')}>
          <View className="flex-1 flex-row items-center justify-between px-6 py-6">
            <View className="flex-row items-center">
              <Text className="mr-2 text-3xl font-bold text-white">Community</Text>
              <Ionicons name="chatbubble-ellipses-sharp" size={32} color="white" />
            </View>
            <View>
              <Feather name="chevron-right" size={32} color="white" />
            </View>
          </View>
        </AppGradient>

        {/* Daily Care */}

        <View className="mt-4 flex flex-row items-center justify-between">
          <Text className="text-2xl font-bold">Daily Care</Text>
          <Text>View All</Text>
        </View>
        <View className="mt-3 flex flex-row flex-wrap justify-evenly">
          <Card />
          <Card />
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
