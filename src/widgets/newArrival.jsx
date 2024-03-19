//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verbs';
import {PRODUCTS_URL} from '../service/url';
import WidgetProductCard from '../components/widgets/widgetProductCart';

// create a component
const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const getAllProducts = () => {
    getRequest(PRODUCTS_URL)
      .then(response => {
        // console.log(response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <View style={styles.container}>
      <WidgetTitle title={'New Arrival'} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={products}
        renderItem={({item}) => <WidgetProductCard item={item} />}
      />
    </View>
  );
};
// item olarak nasıl yakalanıyor???? flatlist içinde
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default NewArrival;
