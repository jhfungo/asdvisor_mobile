import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Image } from 'expo-image';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { supabase } from '~/utils/supabase';
import articleStore from '~/store/articleStore';

const Dailyarticles = () => {
  const website = 'https://nizspdeeeeizctxbgawz.supabase.co/storage/v1/object/public/Images/';
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const { id } = useLocalSearchParams();
  console.log(id);
  const articles = articleStore((state) => state.articles);
  const article = articles.find((article: any) => article.id === Number(id));
  return (
    <>
      <ScrollView>
        {article && (
          <>
            {isLoading && (
              <View
                className="absolute left-1/2 top-32
              ">
                <ActivityIndicator size="small" color="#0000ff" />
              </View>
            )}
            <Image
              source={{ uri: `${website}${article.image}` }}
              contentFit="cover"
              className="absolute left-0 top-0 h-72 w-full"
              onLoadStart={() => setIsLoading(true)} // Triggered when the image starts loading
              onLoadEnd={() => setIsLoading(false)} // Trigg
            />
            <View className="align-center z-10 mt-64 rounded-xl bg-gray-100">
              <View className="mx-5 my-5 rounded">
                <Text>Guide</Text>
                <Text className="text-wrap text-4xl font-bold">{article.title}</Text>
                <Text>Written by Dr. Jane Doe</Text>
              </View>

              <View className="mx-5 mt-5">
                <Text className="text-justify text-2xl">{article.body}</Text>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default Dailyarticles;
