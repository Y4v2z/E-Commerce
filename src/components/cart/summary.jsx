//import liraries
import React, {Component, useContext} from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/color';
import StoreContext from '../../context/context';
import {useNavigation} from '@react-navigation/native';
import {CHECKOUT, LOGİN} from '../../utils/routes';

// create a component
const Summary = () => {
  const {login} = useContext(StoreContext);
  const navigation = useNavigation();
  const checkOut = () => {
    if (login) {
      navigation.navigate(CHECKOUT);
    } else {
      Alert.alert(
        'Giriş Yapınız',
        'Satın almak için giriş yapmanız gereklidir.',
        [
          {
            text: 'Vazgeç',
            onPress: () => console.log('Cancel Pressed'),
          },
          {text: 'Giriş Yap', onPress: () => navigation.navigate(LOGİN)},
        ],
      );
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={{color: AppColors.GRAY}}>Sub Total</Text>
        <Text style={{fontWeight: '700'}}>800</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={{color: AppColors.GRAY}}>Delivery Fee</Text>
        <Text style={{fontWeight: '700'}}>800</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={{color: AppColors.GRAY}}>Discount</Text>
        <Text style={{fontWeight: '700'}}>800</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <Text style={{color: AppColors.GRAY}}>Total</Text>
        <Text style={{fontWeight: '700'}}>800</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={checkOut}>
        <Text style={styles.title}>Checkout</Text>
      </TouchableOpacity>
      {/* <Button onPress={() => checkOut()} title={'Checkout'} /> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: AppColors.SOFTGRAY,
  },
  button: {
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
export default Summary;
