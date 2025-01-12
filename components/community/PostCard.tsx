import React, { useState } from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import userStore from '~/store/userStore';

interface PostCardProps {
  captions?: string;
  image: string;
  post_id: string;
  poster_id: string;
  poster_name: string;
}

const PostCard = ({ captions, image, post_id, poster_id, poster_name }: PostCardProps) => {
  const [view, setView] = useState<number>(2);

  const toggleView = (numberOfLines: number) => {
    setView(numberOfLines);
  };
  const user = userStore((user) => user);
  return (
    <>
      <View className="flex-row items-center bg-white py-3">
        <Image
          source={require('assets/images/ASDVisor_Logo_1.png')}
          className="h-16 w-16 rounded-full"
        />
        <Text className="font-normal">{` ${user.firstName} ${user.lastName} `}</Text>
      </View>
      <Image
        source={require('assets/images/kobeni.png')}
        className="h-96 w-full"
        resizeMode="cover"
      />
      <View className="bg-white py-2">
        <View className="m-2 flex-row items-start text-wrap text-justify ">
          <Text className="text-xl" numberOfLines={view}>
            <Text className="font-bold">{` ${user.firstName} ${user.lastName} `}</Text>
            Mollit dolor sit non amet sunt laboris non veniam dolore. Deserunt nostrud sunt do in do
            est esse ut amet. Cillum exercitation voluptate elit reprehenderit nisi id elit in.
            Commodo cillum tempor excepteur Lorem consequat veniam eiusmod ipsum excepteur sint
            eiusmod incididunt culpa ullamco. Aliquip minim ex consectetur aliqua irure. Dolor elit
            sint Lorem ex aliquip tempor. Irure do id Lorem anim ullamco veniam amet in nisi irure
            ut. Non enim sint ullamco minim ullamco tempor enim tempor reprehenderit id minim id.
            Cillum culpa ea irure excepteur tempor mollit sint. Elit magna excepteur pariatur
            ullamco do eiusmod nulla laboris mollit ea consequat deserunt sit.
          </Text>
        </View>
        {view === 0 && (
          <Pressable className="mx-3" onPress={() => toggleView(2)}>
            <Text className="text-xl font-normal">View Less</Text>
          </Pressable>
        )}

        {view === 2 && (
          <Pressable className="mx-3 my-1" onPress={() => toggleView(0)}>
            <Text className="text-xl font-normal">View More</Text>
          </Pressable>
        )}
      </View>
    </>
  );
};

export default PostCard;
