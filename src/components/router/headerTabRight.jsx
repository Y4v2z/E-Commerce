//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/color';
import {SearchNormal, ShoppingCart} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {CART} from '../../utils/routes';

// create a component
const HeaderTabRight = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(5);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <SearchNormal size="28" color={AppColors.BLACK} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(CART)}
        style={styles.button}>
        {count > 0 && (
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
            <Text
              style={{color: AppColors.WHITE, fontSize: 12, fontWeight: 50}}>
              {count}
            </Text>
          </View>
        )}
        <ShoppingCart size="28" color={AppColors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
