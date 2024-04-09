//import liraries
import React, {Component, useContext} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {AppColors} from '../../theme/color';
import StoreContext from '../../context/context';
import UserInfo from '../../components/profile/userInfo';
import ProfileMenu from '../../components/profile/profileMenü';
import {screenStyle} from '../../styles/secreenStyle';
import {LOGİN, PRODUCTLİST} from '../../utils/routes';
import {Button} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';

// create a component
const Profile = () => {
  const navigation = useNavigation();
  const {login} = useContext(StoreContext);
  return (
    <View style={screenStyle.container}>
      {login ? (
        <ScrollView>
          <UserInfo />
          <ProfileMenu />
        </ScrollView>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: '600'}}>
              Kullanıcı Bilgilerini Görmek İçin Lütfen Giriş Yapınız.
            </Text>
          </View>
          <Button
            onPress={() => {
              navigation.navigate(LOGİN);
            }}
            style={{marginVertical: 10}}
            status="info">
            Giriş Yap
          </Button>
        </View>
      )}
    </View>
  );
};

export default Profile;
