import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import PrimaryButton from '~/components/buttons/PrimaryButton';
import SecondaryButton from '~/components/buttons/SecondaryButton';

const AddChildForm = () => {
  return (
    <View className="mx-4 my-10 flex-1 justify-center ">
      <Text className="text-5xl font-bold">Child Profile</Text>
      <Text className="text-wrap text-2xl">Add basic information about your child</Text>
      <View
        className="my-5 gap-y-2
      ">
        <View className="flex-row gap-x-1">
          <View className="w-1/2">
            <TextInput
              mode="outlined"
              className="w-full"
              label={'First Name'}
              outlineStyle={{ borderRadius: 3 }}
            />
          </View>
          <View className="w-1/2">
            <TextInput
              mode="outlined"
              className="w-full"
              label={'Last Name'}
              outlineStyle={{ borderRadius: 3 }}
            />
          </View>
        </View>
        <TextInput mode="outlined" label={'Weight in KG'} />
        <TextInput mode="outlined" label={'Height in CM'} />
        <TextInput mode="outlined" label={'Birthdate'} />
        <TextInput mode="outlined" label={'Gender'} />
      </View>
      <View className="items-center">
        <PrimaryButton
          containerStyles="w-full mt-3"
          title="Submit"
          onPress={() => console.log('Submit')}
        />
        <SecondaryButton
          title="Cancel"
          containerStyles="w-full mt-3"
          onPress={() => router.back()}
        />
      </View>
    </View>
  );
};

export default AddChildForm;
