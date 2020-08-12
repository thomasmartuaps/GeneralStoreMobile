import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './LandingPage';
import Login from './Login';
import MainPage from './MainPage';

const Stack = createStackNavigator()

export default function NavigationPage () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="MainPage" component={MainPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
