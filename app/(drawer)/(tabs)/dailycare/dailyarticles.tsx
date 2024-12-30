import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { supabase } from '~/utils/supabase';

const Dailyarticles = () => {
  const website = 'https://nizspdeeeeizctxbgawz.supabase.co/storage/v1/object/public/Images/';
  const [dailycare, setDailycare] = useState<{ title: string; body: string; image: string }[]>([]);
  useEffect(() => {
    const getArticle = async () => {
      let { data: dailycare, error } = await supabase
        .from('dailycare')
        .select('title, body, image')
        .eq('id', 3);

      console.log(error);

      if (dailycare) {
        setDailycare(dailycare);
        console.log(dailycare);
      }
    };

    getArticle();
  }, []);
  const url = 'https://loremflickr.com/320/240';
  return (
    <ScrollView className="m-5">
      {dailycare[0] && (
        <>
          <View className="mb-5">
            <Text className="text-xl">Guide</Text>
            <Text className="text-wrap text-4xl font-bold">{dailycare[0].title}</Text>
            <Text>Written by Dr. Jane Doe</Text>
          </View>
          <Image
            source={{ uri: `${website}${dailycare[0].image}` }}
            resizeMode="stretch"
            className="h-72 w-full bg-gray-900"
          />
          <View className="mt-5">
            <Text className="text-justify text-2xl">{dailycare[0].body}</Text>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default Dailyarticles;
