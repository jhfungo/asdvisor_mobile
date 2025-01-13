// import React from 'react';
// import { View, Text } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import '~/global.css';
import { decode } from 'base64-arraybuffer';
import * as ImagePicker from 'expo-image-picker';
import React, { useRef, useState } from 'react';
import { Button, Image, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';
import userStore from '~/store/userStore';
import { supabase } from '~/utils/supabase';

const Caredecision = () => {
  const [image, setImage] = useState<string | undefined>('');
  const userId = userStore((user) => user.id);
  const [title, setTitle] = useState<string | undefined>('');
  const [content, setContent] = useState<string | undefined>('');
  let avatar64: string | null | undefined = '';
  let video64: string | null | undefined = '';
  const type = useRef('');

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      if (result.assets[0].type === 'image') {
        avatar64 = result.assets[0].base64;
        type.current = 'Images';
      }

      if (result.assets[0].type === 'video') {
        type.current = 'Videos';
        video64 = result.assets[0].uri;
      }
    }
  };

  const onSubmit = async () => {
    const fileName =
      type.current === 'Images' ? `${userId}/${Date.now()}.png` : `${userId}/${Date.now()}.mp4`;
    console.log('Avatar64: ', avatar64);
    if (avatar64) {
      const { data: DataImage, error: ErrorImage } = await supabase.storage
        .from(type.current)
        .upload(fileName, decode(avatar64));

      console.log('DataImage: ', DataImage);
      console.log('Error Image', ErrorImage);
      console.log('FileName: ', fileName);
    }

    if (video64) {
      try {
        const file = await FileSystem.readAsStringAsync(video64, {
          encoding: FileSystem.EncodingType.Base64,
        });

        const { data, error } = await supabase.storage
          .from(type.current)
          .upload(fileName, decode(file));

        if (error) {
          console.log('Error uploading video: ', error);
          console.log('Data', data);
        }
      } catch (e) {
        console.log('Error reading video file: ', e.message);
      }
    }

    const { data, error } = await supabase
      .from('dailycare')
      .insert([{ title, body: content, image: fileName }])
      .select();
    console.log(fileName);
    console.log(data);
    console.log(error);
  };

  return (
    <View className="flex-1 items-center justify-center">
      <View className="w-full p-2">
        <TextInput placeholder="Title" value={title} onChangeText={(e) => setTitle(e)} />
        <TextInput placeholder="Content" value={content} onChangeText={(e) => setContent(e)} />
      </View>

      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} className="h-48 w-48" />}

      <Button title="Submit" onPress={onSubmit} />
    </View>
  );
};

export default Caredecision;
