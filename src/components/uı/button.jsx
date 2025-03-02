//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/color';

// create a component
const Button = props => {
  const {title} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 5,
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: AppColors.WHITE,
  },
});

//make this component available to the app
export default Button;
