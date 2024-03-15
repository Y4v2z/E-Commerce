//import liraries
import {
  Category2,
  Home2,
  DocumentFavorite,
  Profile,
} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HOME, CATEGORIES, FAVORİTES, PROFILE} from '../../utils/routes';

// create a component
const TabIcon = ({name, size, color}) => {
  if (name == HOME) {
    return <Home2 size={size} color={color} variant="Bold" />;
  } else if (name == CATEGORIES) {
    return <Category2 size={size} color={color} variant="Bold" />;
  } else if (name == FAVORİTES) {
    return <DocumentFavorite size={size} color={color} variant="Bold" />;
  } else if (name == PROFILE) {
    return <Profile size={size} color={color} variant="Bold" />;
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
});

//make this component available to the app
export default TabIcon;
