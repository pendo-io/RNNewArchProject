/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PropertiesTabs from './PropertiesTabs';
import Profile from './Profile';


const Drawer = createDrawerNavigator();

const DrawerFunc = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerType="front"
      drawerPosition="left"
      initialRouteName="Properties">
      <Drawer.Screen name="Properties" component={PropertiesTabs} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

const MainStak = createStackNavigator();
const MainStackScreen = () => {
  return (
    <MainStak.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <MainStak.Screen name="Drawer" component={DrawerFunc} />
    </MainStak.Navigator>
  );
};

function MyDrawer() {
  return <NavigationContainer>{MainStackScreen()}</NavigationContainer>;
}

export default MyDrawer;

