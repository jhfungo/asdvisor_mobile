import React, { useCallback, useState } from 'react';
import { View, Image, Text, Pressable } from 'react-native';

interface PostCardProps {
  captions?: string;
  image: string;
  post_id?: string;
  poster: {
    name: string;
    picture: string;
  };
}

const PostCard = ({ captions, image, post_id, poster }: PostCardProps) => {
  const [view, setView] = useState<number>(2);
  const [showMore, setShowMore] = useState(false);

  const toggleView = (numberOfLines: number) => {
    setView(numberOfLines);
  };

  const onTextLayout = useCallback((e) => {
    setShowMore(e.nativeEvent.lines.length >= 2);
    console.log(showMore);
    console.log(e.nativeEvent.lines.length >= 2);
  }, []);
  return (
    <>
      <View className="flex-row items-center bg-white py-3">
        <Image source={{ uri: poster.picture }} className="mx-2 h-12 w-12 rounded-full" />
        <Text className="font-normal">{` ${poster.name} `}</Text>
      </View>
      <Image source={{ uri: image }} className="h-96 w-full" resizeMode="cover" />
      {captions && (
        <View className="bg-white py-2">
          <View className="m-2 flex-row items-start text-wrap text-justify ">
            <Text className="text-xl" numberOfLines={view} onTextLayout={onTextLayout}>
              <Text className="font-bold">{` ${poster.name} `}</Text>
              {captions}
            </Text>
          </View>
          {view === 0 && showMore && (
            <Pressable className="mx-3" onPress={() => toggleView(2)}>
              <Text className="text-xl font-normal">View Less</Text>
            </Pressable>
          )}

          {view === 2 && showMore && (
            <Pressable className="mx-3 my-1" onPress={() => toggleView(0)}>
              <Text className="text-xl font-normal">View More</Text>
            </Pressable>
          )}
        </View>
      )}
    </>
  );
};

export default PostCard;
