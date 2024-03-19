//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verbs';
import {CATEGORIES_URL, CATEGORY_URL, PRODUCTS_URL} from '../service/url';
import WidgetProductCard from '../components/widgets/widgetProductCart';

// create a component
const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const getBestSellerProducts = () => {
    getRequest(CATEGORY_URL + "/women's clothing")
      .then(response => {
        // console.log(response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getBestSellerProducts();
  }, []);

  return (
    <View style={styles.container}>
      <WidgetTitle title={'Best Seller'} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={products}
        renderItem={({item}) => <WidgetProductCard item={item} />}
      />
    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default BestSeller;
