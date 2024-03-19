//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {AppColors} from '../../theme/color';
import widgets from '../../widgets';
import {screenStyle} from '../../styles/secreenStyle';

// create a component
const Home = () => {
  const renderItem = ({item}) => {
    return <View>{item.isShow && item.component}</View>;
  };
  return (
    <View style={screenStyle.container}>
      <FlatList
        data={widgets}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
