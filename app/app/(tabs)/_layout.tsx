import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={24} style={{ marginBottom: -2 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.tint,
        tabBarInactiveTintColor: Colors.light.tabIconDefault,
        headerShown: false,
      }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} /> }} />
      <Tabs.Screen name="about" options={{ title: 'About', tabBarIcon: ({ color }) => <TabBarIcon name="info-circle" color={color} /> }} />
      <Tabs.Screen name="why-us" options={{ title: 'Why Us', tabBarIcon: ({ color }) => <TabBarIcon name="leaf" color={color} /> }} />
      <Tabs.Screen name="blog" options={{ title: 'Blog', tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} /> }} />
      <Tabs.Screen name="more" options={{ title: 'More', tabBarIcon: ({ color }) => <TabBarIcon name="bars" color={color} /> }} />
    </Tabs>
  );
}
