import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './LandingPage';
import Login from './Login';
import StorePage from './StorePage';
import ProfilePage from './ProfilePage';
import CheckoutPage from './CheckoutPage';

const Stack = createStackNavigator()

export default function NavigationPage () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" headerMode="none">
        <Stack.Screen name="LandingPage" component={LandingPage}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="StorePage" component={StorePage}></Stack.Screen>
        <Stack.Screen name="ProfilePage" component={ProfilePage}></Stack.Screen>
        <Stack.Screen name="CheckoutPage" component={CheckoutPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
