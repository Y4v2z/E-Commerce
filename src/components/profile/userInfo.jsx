//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {height, width} from '../../utils/constant';

// create a component
const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: width * 0.4,
          height: width * 0.4,
          resizeMode: 'contain',
          borderRadius: 100,
        }}
        source={require('../../assets/images/user.jpg')}
      />

      <Text style={{fontSize: 18, fontWeight: '800', marginVertical: 10}}>
        Yavuz AVCİ
      </Text>
      <Text style={{fontSize: 14, fontWeight: '400'}}>Mobile Developer</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    minHeight: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default UserInfo;
