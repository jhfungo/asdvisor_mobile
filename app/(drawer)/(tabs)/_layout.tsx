import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6b21a8',
      }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="caredecision"
        options={{
          title: 'Care Decision',
          tabBarIcon: ({ color }) => <Fontisto name="direction-sign" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="childprofile"
        options={{
          title: 'Child Profile',
          tabBarIcon: ({ color }) => <FontAwesome6 name="children" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="dailycare"
        options={{
          title: 'Daily Care',
          tabBarIcon: ({ color }) => <FontAwesome5 name="book-open" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="appointment"
        options={{
          title: 'Appointment',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="calendar-month" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
