import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Cart, Zustand} from '../screens';

const Stack = createNativeStackNavigator();
const NavigationApp = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Zustand" component={Zustand} />
    </Stack.Navigator>
  );
};

export default NavigationApp;
