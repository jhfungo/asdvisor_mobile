// import React from 'react';
// import { View, Text } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import '~/global.css';
import { decode } from 'base64-arraybuffer';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import userStore from '~/store/userStore';
import { supabase } from '~/utils/supabase';

const Caredecision = () => {
  const [image, setImage] = useState<string | undefined>('');
  const userId = userStore((user) => user.id);
  const [title, setTitle] = useState<string | undefined>('');
  const [content, setContent] = useState<string | undefined>('');
  let avatar64: string | null | undefined = '';

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
      avatar64 = result.assets[0].base64;
      // if (avatar64) {
      //   const { data, error } = await supabase.storage
      //     .from('Images')
      //     .upload(`${userId}/${Date.now()}.png`, decode(avatar64));
      // }
    }
  };

  const onSubmit = async () => {
    const fileName = `${userId}/${Date.now()}.png`;

    const { data, error } = await supabase
      .from('dailycare')
      .insert([{ title, body: content, image: fileName }])
      .select();
    console.log(fileName);
    console.log(data);
    console.log(error);
    if (avatar64) {
      const { data: DataImage, error: ErrorImage } = await supabase.storage
        .from('Images')
        .upload(fileName, decode(avatar64));

      console.log(DataImage);
      console.log(ErrorImage);
      console.log(fileName);
    }
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
