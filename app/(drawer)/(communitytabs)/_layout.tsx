import { Tabs, usePathname } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  const location = usePathname();

  const tabBarPaths = ['/community', '/chat'];

  const isTabBarShown = tabBarPaths.includes(location);
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6b21a8',
      }}>
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => <Fontisto name="direction-sign" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'chat',
          tabBarStyle: { display: isTabBarShown ? '' : 'none' },
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
