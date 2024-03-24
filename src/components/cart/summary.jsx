//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors} from '../../theme/color';
import Button from '../uı/button';

// create a component
const Summary = () => {
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
      <Button title={'Checkout'} />
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
});

//make this component available to the app
export default Summary;
