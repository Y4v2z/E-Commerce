//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {height} from '../../utils/constant';
import {Button} from '@ui-kitten/components';
import {AppColors} from '../../theme/color';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLİST} from '../../utils/routes';

// create a component
const ListEmptyComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 24}}>Henüz Ürün Eklemediniz.</Text>
      </View>
      <Button
        onPress={() => navigation.navigate(PRODUCTLİST)}
        style={styles.button}
        status="info">
        Tüm Ürünler
      </Button>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: height / 2,
    backgroundColor: AppColors.WHITE,
  },
  button: {
    marginVertical: 20,
  },
});

//make this component available to the app
export default ListEmptyComponent;
