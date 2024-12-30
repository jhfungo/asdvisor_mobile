import { LinearGradient } from 'expo-linear-gradient';
import { cssInterop } from 'nativewind';
import React from 'react';
import { Pressable } from 'react-native';

interface GradientProps {
  classStyles: any;
  children: any;
  onPress?: () => void;
}

const AppGradient = ({ classStyles, children, onPress }: GradientProps) => {
  cssInterop(LinearGradient, { className: 'style' });
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [pressed ? { opacity: 0.1 } : {}]}>
      <LinearGradient
        colors={['#ffffff', '#6b21a8']}
        start={{ x: 0, y: 1.7 }}
        end={{ x: 0, y: 0.7 }}
        className={`flex w-full rounded-2xl ${classStyles}`}>
        {children}
      </LinearGradient>
    </Pressable>
  );
};

export default AppGradient;
