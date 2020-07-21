import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function NavigationPage () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login"></Stack.Screen>
        <Stack.Screen name="StorePage"></Stack.Screen>
        <Stack.Screen name="ProfilePage"></Stack.Screen>
        <Stack.Screen name="CheckoutPage"></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
