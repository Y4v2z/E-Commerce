// In App.js in a new project

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CART,
  CHECKOUT,
  LOGİN,
  PRODUCTDETAİL,
  PRODUCTLİST,
  TAB,
} from '../utils/routes';
import Cart from '../screens/Cart/Cart';
import TabNavigator from './tabNavigator';
import ProductList from '../screens/product/productList';
import ProductDetail from '../screens/product/productDetail';
import HeaderTabRight from '../components/router/headerTabRight';
import Login from '../screens/login/login';
import CheckOut from '../screens/checkout/checkOut';

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
      <Stack.Screen
        name={PRODUCTDETAİL}
        component={ProductDetail}
        options={({route, navigation}) => ({
          headerRight: () => <HeaderTabRight />,
        })}
      />
      <Stack.Screen
        name={PRODUCTLİST}
        component={ProductList}
        options={({route, navigation}) => ({
          headerRight: () => <HeaderTabRight />,
          title: route?.params?.title,
        })}
      />
      <Stack.Screen name={CART} component={Cart} />
      <Stack.Screen name={LOGİN} component={Login} />
      <Stack.Screen name={CHECKOUT} component={CheckOut} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
