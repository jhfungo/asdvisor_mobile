import { View, Text } from 'react-native';
import React, { useRef, useReducer } from 'react';
import { TextInput, RadioButton, Portal, PaperProvider } from 'react-native-paper';
import PrimaryButton from '~/components/buttons/PrimaryButton';
import { supabase } from '~/utils/supabase';
import { router } from 'expo-router';
import DialogBox from '~/components/DialogBox';

const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  error: '',
  contact: '',
  confirm_password: '',
};

const Register = () => {
  const [showDialog, setShowDialog] = React.useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_FIRST_NAME':
        return { ...state, first_name: action.payload };
      case 'SET_LAST_NAME':
        return { ...state, last_name: action.payload };
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_CONTACT':
        return { ...state, contact: action.payload };
      case 'SET_PASSWORD':
        return { ...state, password: action.payload };
      case 'SET_CONFIRM_PASSWORD':
        return { ...state, confirm_password: action.payload };
      case 'SET_ERROR':
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field) => (text) => {
    dispatch({
      type: `SET_${field.toUpperCase()}`,
      payload: text,
    });
  };

  const handleSubmit = async () => {
    dispatch({ type: 'SET_ERROR', payload: '' });
    if (!state.email || !state.password) {
      dispatch({ type: 'SET_ERROR', payload: 'Please fill in all fields!' });
      return;
    }

    if (state.password !== state.confirm_password) {
      dispatch({ type: 'SET_ERROR', payload: 'Passwords do not match!' });
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      email: state.email,
      password: state.password,
    });
    console.log(data, error);
    insertUser(data.user?.id);
    setShowDialog(true);
  };

  const insertUser = async (id: string | undefined) => {
    const { data, error } = await supabase
      .from('user')
      .insert([
        { id, first_name: state.first_name, last_name: state.last_name, contact: state.contact },
      ])
      .select();
    console.log(data, error);
  };

  return (
    <>
      <PaperProvider>
        <Portal>
          <View className="mx-4 flex-1 justify-center ">
            <View className="flex-row gap-x-1">
              <View className="w-1/2">
                <TextInput
                  placeholder="First Name"
                  value={state.first_name}
                  onChangeText={handleChange('first_name')}
                />
              </View>
              <View className="w-1/2">
                <TextInput
                  placeholder="Last Name"
                  value={state.last_name}
                  onChangeText={handleChange('last_name')}
                />
              </View>
            </View>
            <View className="mt-2 gap-y-2">
              <TextInput
                placeholder="Email"
                onChangeText={handleChange('email')}
                value={state.email}
              />
              <TextInput
                placeholder="Contact"
                onChangeText={handleChange('contact')}
                value={state.contact}
              />
              <TextInput
                placeholder="Password"
                onChangeText={handleChange('Password')}
                value={state.password}
                secureTextEntry
              />
              <TextInput
                placeholder="Confirm Password"
                secureTextEntry
                onChangeText={handleChange('confirm_password')}
              />
              {state.error && <Text className="mt-2 text-center text-red-500">{state.error}</Text>}
              <PrimaryButton title="Submit" onPress={handleSubmit} containerStyles="w-full mt-4" />
            </View>
          </View>
          {showDialog && (
            <DialogBox
              title="Account Created"
              body="Verify Account through Email Address to Access"
              toggle
              onDismiss={() => router.replace('/login')}
            />
          )}
        </Portal>
      </PaperProvider>
    </>
  );
};

export default Register;
