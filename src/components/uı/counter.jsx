//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/color';
import {MinusCirlce, AddCircle} from 'iconsax-react-native';

// create a component
const Counter = ({onChange, size = 35}) => {
  const [count, setCount] = useState(0);
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
      onChange(count - 1);
    }
  };
  const increase = () => {
    if (count < 5) {
      setCount(count + 1);
      onChange(count + 1);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrease}>
        <MinusCirlce
          size={size}
          variant="outline"
          color={AppColors.BLACK}
          style={styles.button}
        />
      </TouchableOpacity>
      <Text style={{fontSize: 18, marginHorizontal: 8, fontWeight: '500'}}>
        {count}
      </Text>
      <TouchableOpacity onPress={increase}>
        <AddCircle
          size={size}
          variant="Bold"
          color={AppColors.BLACK}
          style={styles.button}
        />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: AppColors.SOFTGRAY,
    padding: 5,
    borderRadius: 50,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Counter;
