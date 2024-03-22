//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {width} from '../../utils/constant';
import {AppColors} from '../../theme/color';
import {Heart} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAİL} from '../../utils/routes';
import Button from '../uı/button';

// create a component
const ProductCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAİL, {item: item})}
      style={styles.container}>
      <Image
        style={{width: width * 0.4, height: width * 0.3, resizeMode: 'contain'}}
        source={{
          uri: item.image,
        }}
      />
      <View style={{flex: 2, justifyContent: 'space-between'}}>
        <Text
          numberOfLines={3}
          style={{
            fontWeight: '700',
            marginVertical: 5,
            fontSize: 16,
            color: AppColors.BLACK,
          }}>
          {item.title}
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text
            style={{
              marginVertical: 5,
              fontSize: 14,
              color: AppColors.GRAY,
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

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity>
            <Heart size={20} color={AppColors.RED} variant="Bold" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Button title="Sepete Ekle" />
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: width / 2,
    margin: 5,
    flex: 1,
    marginVertical: 15,
  },
});

//make this component available to the app
export default ProductCard;
