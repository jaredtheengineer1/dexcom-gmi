import { Ionicons } from '@expo/vector-icons';
import { theme } from '@styles/theme';
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return(
  <Tabs
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.colorPrimary,
      tabBarInactiveTintColor: theme.colors.textSecondary,
      tabBarStyle: {
        backgroundColor: theme.colors.bgSurface,
        height: 60,
        paddingBottom: 5
      }
    }}
    >
      <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="home" color={color} size={size} />
        )
      }}
      />
      <Tabs.Screen
      name="how-it-works"
      options={{
        title: 'How It Works',
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="help-circle" color={color} size={size} />
        )
      }}
      />
      <Tabs.Screen
      name="privacy"
      options={{
        title: 'Privacy',
        tabBarIcon: ({ color, size}) => (
          <Ionicons name="lock-closed" color={color} size={size} />
        )
      }}
      />
    </Tabs>)
}
