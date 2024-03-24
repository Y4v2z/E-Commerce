//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors} from '../../theme/color';

// create a component
const Badge = ({count}) => {
  return (
    <View
      style={{
        backgroundColor: AppColors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        borderRadius: 30,
        position: 'absolute',
        zIndex: 2,
        right: -8,
        top: -12,
      }}>
      <Text style={{color: AppColors.WHITE, fontSize: 12, fontWeight: 50}}>
        {count}
      </Text>
    </View>
  );
};

export default Badge;
