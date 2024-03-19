//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {height, width} from '../utils/constant';
import {AppColors} from '../theme/color';

// create a component
const Introduction = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/nike.jpg')} style={styles.image} />
      <TouchableOpacity
        style={{
          backgroundColor: AppColors.PRIMARY,
          position: 'absolute',
          bottom: 15,
          right: 20,
          height: height * 0.03,
          width: width * 0.4,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <Text
          style={{fontSize: 16, fontWeight: 'bold', color: AppColors.WHITE}}>
          Shop Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: width - 30,
    height: height / 4,
    resizeMode: 'cover',
  },
});

//make this component available to the app
export default Introduction;
