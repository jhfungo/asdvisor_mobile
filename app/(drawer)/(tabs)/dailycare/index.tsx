import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import Card from '~/components/Card';
import '~/global.css';
import { supabase } from '~/utils/supabase';
import articleStore from '~/store/articleStore';
import DisplayCard from '~/components/DisplayCard';

const Dailycare = () => {
  const state = articleStore((state) => state);
  const [loading, setLoading] = useState(true); // Track loading state
  const website = 'https://nizspdeeeeizctxbgawz.supabase.co/storage/v1/object/public/Images/';
  // https://nizspdeeeeizctxbgawz.supabase.co/
  useEffect(() => {
    const getArticle = async () => {
      let { data: dailycare, error } = await supabase
        .from('dailycare')
        .select('id,title, body, image, author_id');

      console.log(error);

      if (dailycare) {
        state.setArticles(dailycare);
      }
      setLoading(false); // Stop loading after data is fetched
    };
    if (state.articles.length === 0) {
      getArticle();
    }
  }, []);
  console.log(state.articles);

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => router.push({ pathname: '/dailycare/dailyarticles', params: { id: item.id } })}
      className="my-2 items-center">
      <DisplayCard title={item.title} author={item.author_id} image={`${website}${item.image}`} />
    </Pressable>
  );

  return (
    <SafeAreaView className="flex-1">
      {loading ? ( // Show loading indicator
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View className="mt-3">
          <FlatList
            contentContainerStyle={{ paddingBottom: 100 }}
            data={state.articles}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            ListHeaderComponent={() => (
              <Text className="ml-2 mt-8 text-left text-6xl font-bold">Daily Care</Text>
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Dailycare;
