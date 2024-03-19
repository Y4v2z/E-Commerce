// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CART, HOME, TAB} from '../utils/routes';
import Cart from '../screens/Cart/Cart';
import TabNavigator from './tabNavigator';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name={TAB}
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name={CART} component={Cart} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
