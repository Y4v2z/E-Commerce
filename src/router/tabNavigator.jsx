import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CATEGORIES, FAVORİTES, HOME, PROFILE} from '../utils/routes';
import Home from '../screens/home';
import Categories from '../screens/categories';
import Favorites from '../screens/favorites';
import Profile from '../screens/profıle';
import {AppColors} from '../theme/color';
import TabIcon from '../components/router';
import {ShoppingCart} from 'iconsax-react-native';
import {Text, TouchableOpacity, View} from 'react-native';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarActiveTintColor: AppColors.PRIMARY,
        tabBarInactiveTintColor: AppColors.GRAY,
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
          />
        ),
        headerRight: ({focused, color, size}) => (
          <TouchableOpacity style={{marginHorizontal: 20}}>
            <ShoppingCart size="30" color={AppColors.BLACK} variant="Bold" />
          </TouchableOpacity>
        ),
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={CATEGORIES} component={Categories} />
      <Tab.Screen name={FAVORİTES} component={Favorites} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
