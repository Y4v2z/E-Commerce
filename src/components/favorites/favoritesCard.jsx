//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {width} from '../../utils/constant';
import {AppColors} from '../../theme/color';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAİL} from '../../utils/routes';

// create a component
const FavoritesCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAİL, {item: item})}
      style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: width * 0.15,
            height: width * 0.15,
            resizeMode: 'contain',
          }}
          source={{
            uri: item.image,
          }}
        />
      </View>
      <View style={{flex: 3, paddingHorizontal: 5}}>
        <Text
          numberOfLines={2}
          style={{
            fontWeight: '700',
            marginVertical: 5,
            fontSize: 16,
            color: AppColors.BLACK,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            marginVertical: 5,
            fontSize: 14,
            color: AppColors.GRAY,
            textTransform: 'capitalize',
          }}>
          {item.category}
        </Text>
        <Text
          style={{
            fontWeight: '700',
            marginVertical: 5,
            fontSize: 16,
            color: AppColors.BLACK,
          }}>
          ${item.price}
        </Text>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
  },
});

//make this component available to the app
export default FavoritesCard;
