import React, { useRef } from 'react';
import { View, TextInput } from 'react-native';

const createpost = () => {
  const bodyRef = useRef();
  return (
    <View className="mx-2 my-3 flex-1">
      <TextInput
        placeholder="Title"
        className="mb-5 text-4xl text-wrap"
        onSubmitEditing={() => {
          bodyRef.current.focus();
        }}
        multiline={true}
        blurOnSubmit={true}
        returnKeyType="next"
      />
      <TextInput
        placeholder="body text (optional)"
        className="text-xl text-wrap"
        ref={bodyRef}
        returnKeyType="next"
        multiline={true}
        onSubmitEditing={() => {
          // Execute code to update users name
      }}
      />
    </View>
  );
};

export default createpost;
