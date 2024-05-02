//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verbs';
import {CATEGORIES_URL, CATEGORY_URL, PRODUCTS_URL} from '../service/url';
import WidgetProductCard from '../components/widgets/widgetProductCart';
import CategorySelect from '../components/widgets/categorySelect';

// create a component
const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const getBestSellerProducts = (category = "women's clothing") => {
    getRequest(CATEGORY_URL + `/${category}`, {limit: 5})
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
      <WidgetTitle title={'Best Seller'} category={"men's clothing"} />
      <CategorySelect onSelect={value => getBestSellerProducts(value)} />
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
