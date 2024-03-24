//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/color';
import {height} from '../../utils/constant';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLİST} from '../../utils/routes';

// create a component
const CategoryCard = ({item}) => {
  const naigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        naigation.navigate(PRODUCTLİST, {category: item, title: item})
      }>
      <Text
        style={{fontSize: 24, fontWeight: '600', textTransform: 'capitalize'}}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.SOFTGRAY,
    padding: 10,
    minHeight: height / 8,
    justifyContent: 'center',
    marginVertical: 5,
  },
});

//make this component available to the app
export default CategoryCard;
