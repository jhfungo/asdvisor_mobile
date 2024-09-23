import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

const detailarticle = () => {
  const url = 'https://loremflickr.com/320/240';
  return (
    <ScrollView className="m-5">
      <View className="mb-5">
        <Text className="text-xl">Temper Tantrum</Text>
        <Text className="text-wrap text-4xl font-bold">March 5, 2023</Text>
        <Text>Written by Jane Doe</Text>
      </View>
      <Image source={{ uri: url }} resizeMode="contain" className="h-60 w-full" />
      <View className="mt-5">
        <Text className="text-justify text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa mollitia exercitationem
          corporis doloribus minus illo ducimus necessitatibus laudantium eum esse officia quas
          earum itaque nostrum tempore deleniti suscipit praesentium debitis, aliquid, voluptate
          corrupti amet, veniam autem! Assumenda repellendus nesciunt dolorem odio deleniti, eum
          eveniet corrupti mollitia, debitis praesentium veniam reiciendis! Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Culpa mollitia exercitationem corporis doloribus minus
          illo ducimus necessitatibus laudantium eum esse officia quas earum itaque nostrum tempore
          deleniti suscipit praesentium debitis, aliquid, voluptate corrupti amet, veniam autem!
          Assumenda repellendus nesciunt dolorem odio deleniti, eum eveniet corrupti mollitia,
          debitis praesentium veniam reiciendis! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Culpa mollitia exercitationem corporis doloribus minus illo ducimus necessitatibus
          laudantium eum esse officia quas earum itaque nostrum tempore deleniti suscipit
          praesentium debitis, aliquid, voluptate corrupti amet, veniam autem! Assumenda repellendus
          nesciunt dolorem odio deleniti, eum eveniet corrupti mollitia, debitis praesentium veniam
          reiciendis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa mollitia
          exercitationem corporis doloribus minus illo ducimus necessitatibus laudantium eum esse
          officia quas earum itaque nostrum tempore deleniti suscipit praesentium debitis, aliquid,
          voluptate corrupti amet, veniam autem! Assumenda repellendus nesciunt dolorem odio
          deleniti, eum eveniet corrupti mollitia, debitis praesentium veniam reiciendis!
        </Text>
      </View>
    </ScrollView>
  );
};

export default detailarticle;
