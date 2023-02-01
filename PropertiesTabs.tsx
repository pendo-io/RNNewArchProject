import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
// import SearchPage from './SearchPage';
// import Favorites from './Favorites';
// import Settings from '../Profile/Settings/Settings';
import { TouchableOpacity, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchPage from './SearchPage';
import Settings from './Settings';


const Tab = createBottomTabNavigator();
export default function PropertiesTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{ keyboardHidesTabBar: true }}>
      <Tab.Screen
        name="SearchPageStack"
        component={SearchPage}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" size={17} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name="gear" size={17} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}



