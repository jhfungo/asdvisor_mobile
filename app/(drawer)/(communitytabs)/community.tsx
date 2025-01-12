import React, { useState } from 'react';
import { Image, SafeAreaView, Text, View, Button, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PostCard from '~/components/community/PostCard';
import userStore from '~/store/userStore';

const Community = () => {
  const user = userStore((user) => user);

  const posts = [
    {
      id: '1',
      caption:
        'Ipsum eiusmod ipsum ipsum labore eiusmod sit ad. Ullamco fugiat exercitation laborum do sint est incididunt laborum esse magna aliquip elit irure ea veniam. Non aliquip id esse reprehenderit in minim irure mollit sit excepteur et aute ullamco. Labore dolor labore id do aliquip proident reprehenderit consequat commodo mollit. Officia ex et cupidatat in. Esse aliqua amet consectetur deserunt officia nostrud. Ea ullamco tempor fugiat nisi magna sunt consectetur culpa eiusmod sint nulla. Consectetur elit officia exercitation sit Lorem incididunt exercitation quis nisi.',
      image: 'https://loremflickr.com/320/240/',
      poster: {
        name: 'John Doe',
        picture: 'https://loremflickr.com/320/240/people',
      },
    },
    {
      id: '2',
      caption:
        'Ipsum eiusmod ipsum ipsum labore eiusmod sit ad. Ullamco fugiat exercitation laborum do sint est incididunt laborum esse magna aliquip elit irure ea veniam. Non aliquip id esse reprehenderit in minim irure mollit sit excepteur et aute ullamco. Labore dolor labore id do aliquip proident reprehenderit consequat commodo mollit. Officia ex et cupidatat in. Esse aliqua amet consectetur deserunt officia nostrud. Ea ullamco tempor fugiat nisi magna sunt consectetur culpa eiusmod sint nulla. Consectetur elit officia exercitation sit Lorem incididunt exercitation quis nisi.',
      image: 'https://loremflickr.com/320/240/nature',
      poster: {
        name: 'John Doe',
        picture: 'https://loremflickr.com/320/240/people',
      },
    },
    {
      id: '3',
      caption:
        'Ipsum eiusmod ipsum ipsum labore eiusmod sit ad. Ullamco fugiat exercitation laborum do sint est incididunt laborum esse magna aliquip elit irure ea veniam. Non aliquip id esse reprehenderit in minim irure mollit sit excepteur et aute ullamco. Labore dolor labore id do aliquip proident reprehenderit consequat commodo mollit. Officia ex et cupidatat in. Esse aliqua amet consectetur deserunt officia nostrud. Ea ullamco tempor fugiat nisi magna sunt consectetur culpa eiusmod sint nulla. Consectetur elit officia exercitation sit Lorem incididunt exercitation quis nisi.',
      image: 'https://loremflickr.com/320/240/nature',
      poster: {
        name: 'John Doe',
        picture: 'https://loremflickr.com/320/240/people',
      },
    },
    {
      id: '4',
      caption:
        'Ipsum eiusmod ipsum ipsum labore eiusmod sit ad. Ullamco fugiat exercitation laborum do sint est incididunt laborum esse magna aliquip elit irure ea veniam. Non aliquip id esse reprehenderit in minim irure mollit sit excepteur et aute ullamco. Labore dolor labore id do aliquip proident reprehenderit consequat commodo mollit. Officia ex et cupidatat in. Esse aliqua amet consectetur deserunt officia nostrud. Ea ullamco tempor fugiat nisi magna sunt consectetur culpa eiusmod sint nulla. Consectetur elit officia exercitation sit Lorem incididunt exercitation quis nisi.',
      image: 'https://loremflickr.com/320/240/nature',
      poster: {
        name: 'John Doe',
        picture: 'https://loremflickr.com/320/240/people',
      },
    },
    {
      id: '5',
      caption:
        'Ipsum eiusmod ipsum ipsum labore eiusmod sit ad. Ullamco fugiat exercitation laborum do sint est incididunt laborum esse magna aliquip elit irure ea veniam. Non aliquip id esse reprehenderit in minim irure mollit sit excepteur et aute ullamco. Labore dolor labore id do aliquip proident reprehenderit consequat commodo mollit. Officia ex et cupidatat in. Esse aliqua amet consectetur deserunt officia nostrud. Ea ullamco tempor fugiat nisi magna sunt consectetur culpa eiusmod sint nulla. Consectetur elit officia exercitation sit Lorem incididunt exercitation quis nisi.',
      image: 'https://loremflickr.com/320/240/nature',
      poster: {
        name: 'John Doe',
        picture: 'https://loremflickr.com/320/240/people',
      },
    },
  ];
  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: 100 }}
      data={posts}
      renderItem={({ item }) => (
        <PostCard captions={item.caption} poster={item.poster} image={item.image} />
      )}
    />
  );
};

export default Community;
