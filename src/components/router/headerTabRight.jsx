//import liraries
import React, {Component, useContext, useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/color';
import {SearchNormal, ShoppingCart} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {CART} from '../../utils/routes';
import Badge from '../cart/badge';
import StoreContext from '../../context/context';

// create a component
const HeaderTabRight = () => {
  const navigation = useNavigation();
  const {cart} = useContext(StoreContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <SearchNormal size="28" color={AppColors.BLACK} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(CART)}
        style={styles.button}>
        {cart?.length > 0 && <Badge count={cart?.length} />}
        <ShoppingCart size="28" color={AppColors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  button: {
    marginHorizontal: 8,
  },
});

//make this component available to the app
export default HeaderTabRight;
