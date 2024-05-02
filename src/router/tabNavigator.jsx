import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CATEGORIES, FAVORİTES, HOME, PROFILE} from '../utils/routes';
import Home from '../screens/home/home';
import Categories from '../screens/categories/categories';
import Favorites from '../screens/favorites/favorites';
import Profile from '../screens/profıle/profile';
import {AppColors} from '../theme/color';
import TabIcon from '../components/router/tabIcon';
import HeaderTabRight from '../components/router/headerTabRight';
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarActiveTintColor: AppColors.PRIMARY,
        tabBarInactiveTintColor: AppColors.GRAY,
        headerTitleAlign: 'center',
        headerBackTitle: 'Geri',
        tabBarIcon: ({focused, color, size}) => (
          <TabIcon
            focused={focused}
            color={color}
            size={size}
            name={route?.name}
            route={route}
          />
        ),
        headerRight: () => <HeaderTabRight />,
      })}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={CATEGORIES} component={Categories} />
      <Tab.Screen name={FAVORİTES} component={Favorites} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
