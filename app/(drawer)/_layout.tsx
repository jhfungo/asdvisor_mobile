import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { ReactNode } from 'react';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';
import { Text, Image, View, Pressable } from 'react-native';
import { supabase } from '~/utils/supabase';
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { Button } from 'react-native-paper';

const CustomDrawerContent = (props: any): ReactNode => {
  const pathName = usePathname();
  const logout = async () => {
    let { error } = await supabase.auth.signOut();
  };

  console.log(pathName);

  return (
    <DrawerContentScrollView {...props}>
      <View>
        {/* <Image
          source={require('~/assets/images/ASDVisor_Logo_2.png')}
          resizeMode="contain"
          className="h-40 w-40 self-center"
        /> */}
      </View>

      <DrawerItem
        icon={({ color, size }) => (
          <Entypo name="home" size={24} color={pathName === '/dashboard' ? '#6b21a8' : '#000'} />
        )}
        label={'Home'}
        labelStyle={{ color: pathName === '/dashboard' ? 'white' : '#000' }}
        style={{ backgroundColor: pathName === '/dashboard' ? '#6b21a8' : 'white' }}
        onPress={() => {
          router.push('/(drawer)/(tabs)/dashboard');
        }}
      />

      <DrawerItem
        icon={({ color, size }) => (
          <Fontisto
            name="direction-sign"
            size={24}
            color={pathName === '/caredecision' ? 'white' : '#000'}
          />
        )}
        label={'Care Decision'}
        labelStyle={{ color: pathName === '/caredecision' ? 'white' : '#000' }}
        style={{ backgroundColor: pathName === '/caredecision' ? '#6b21a8' : 'white' }}
        onPress={() => {
          router.push('/(drawer)/(tabs)/caredecision');
        }}
      />

      <DrawerItem
        icon={({ color, size }) => (
          <FontAwesome6
            name="children"
            size={20}
            color={pathName === '/childprofile' ? 'white' : '#000'}
          />
        )}
        label={'Child Profile'}
        labelStyle={{ color: pathName === '/childprofile' ? 'white' : '#000' }}
        style={{ backgroundColor: pathName === '/childprofile' ? '#6b21a8' : 'white' }}
        onPress={() => {
          router.push('/(drawer)/(tabs)/childprofile');
        }}
      />

      <DrawerItem
        icon={({ color, size }) => (
          <FontAwesome5
            name="book-open"
            size={24}
            color={pathName === '/dailycare' ? 'white' : '#000'}
          />
        )}
        label={'Daily Care'}
        labelStyle={{ color: pathName === '/dailycare' ? 'white' : '#000' }}
        style={{ backgroundColor: pathName === '/dailycare' ? '#6b21a8' : 'white' }}
        onPress={() => {
          router.push('/(drawer)/(tabs)/dailycare');
        }}
      />

      <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons
            name="calendar-month"
            size={24}
            color={pathName === '/appointment' ? 'white' : '#000'}
          />
        )}
        label={'Appointments'}
        labelStyle={{ color: pathName === '/appointment' ? 'white' : '#000' }}
        style={{ backgroundColor: pathName === '/appointment' ? '#6b21a8' : 'white' }}
        onPress={() => {
          router.push('/(drawer)/(tabs)/appointment');
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="chatbubble-ellipses-sharp"
            size={24}
            color={pathName === '/community' ? 'white' : '#000'}
          />
        )}
        label={'Community'}
        labelStyle={{ color: pathName === '/community' ? 'white' : '#000' }}
        style={{ backgroundColor: pathName === '/community' ? '#6b21a8' : 'white' }}
        onPress={() => {
          router.push('/community');
        }}
      />
      <DrawerItem
        icon={({ color, size }) => <MaterialIcons name="logout" size={24} color="red" />}
        label="Logout"
        labelStyle={{ color: 'red' }}
        onPress={() => {
          logout();
          router.replace('/');
        }}
      />
    </DrawerContentScrollView>
  );
};

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
          headerTitle: 'ASDVisor',
          headerTitleAlign: 'center',
          headerTintColor: '#6b21a8',
          headerTitleStyle: { color: 'black' },
          headerRight: () => (
            <Pressable onPress={() => alert('Pressed User Button')}>
              <FontAwesome5 name="user-circle" size={24} color="#6b21a8" className="mr-3" />
            </Pressable>
          ),
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}></Drawer>
    </GestureHandlerRootView>
  );
}
