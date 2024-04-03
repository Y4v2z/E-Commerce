//import liraries
import React, {Component, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  Alert,
} from 'react-native';
import {width} from '../../utils/constant';
import {AppColors} from '../../theme/color';
import {Heart} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {LOGİN, PRODUCTDETAİL} from '../../utils/routes';
import StoreContext from '../../context/context';

// create a component
const WidgetProductCard = ({item}) => {
  const navigation = useNavigation();
  const {addFavorites, login} = useContext(StoreContext);
  checkIsLogin = () => {
    if (login) {
      addFavorites(item);
    } else {
      Alert.alert(
        'Giriş Yapınız',
        'Favorilere eklemek için giriş yapmanız gereklidir.',
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
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(PRODUCTDETAİL, {item: item})}>
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
          <TouchableOpacity onPress={() => checkIsLogin()}>
            {item.favorites ? (
              <Heart size={20} color={AppColors.RED} variant="Bold" />
            ) : (
              <Heart size={20} color={AppColors.BLACK} variant="Outline" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    margin: 5,
  },
});

//make this component available to the app
export default WidgetProductCard;
