import { View, Text, SafeAreaView, RefreshControl, FlatList, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button } from 'react-native-paper';
import { router } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const community = () => {
  // const [refreshing, setRefreshing] = useState(true);
  // const [userData, setUserData] = useState<any>([]);
  // useEffect(() => {
  //   loadUserData();
  // }, []);

  // const loadUserData = () => {
  //   fetch('https://randomuser.me/api/?results=8')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       setRefreshing(false);
  //       var newdata: any = userData.concat(responseJson.results);
  //       setUserData(newdata);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // const ItemView = ({ item, index }: any) => {
  //   return (
  //     <Text
  //       style={{
  //         fontSize: 20,
  //         padding: 10,
  //       }}>
  //       {index} {item.name.first} {item.name.last}
  //     </Text>
  //   );
  // };

  // const ItemSeparatorView = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 1,
  //         width: '100%',
  //         backgroundColor: '#C8C8C8',
  //       }}
  //     />
  //   );
  // };

  // console.log(userData);
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
        {/* <View>
        {refreshing ? <ActivityIndicator /> : null}
        <FlatList
          data={userData.reverse()}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={(item) => ItemView(item)}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={loadUserData} />}
        />
      </View> */}
      </SafeAreaView>
      <View className="absolute bottom-5 right-5">
        <Button
          mode="contained-tonal"
          onPress={() => router.push('/createpost')}
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

export default community;
