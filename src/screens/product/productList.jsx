//import liraries
import React, {Component, useState, useEffect} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {PRODUCTS_URL} from '../../service/url';
import {getRequest} from '../../service/verbs';
import ProductCard from '../../components/product/productCard';
import {screenStyle} from '../../styles/secreenStyle';
import Spinner from '../../components/uı/spinner';
import CategorySelect from '../../components/widgets/categorySelect';
import {Category} from 'iconsax-react-native';

// create a component
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = Category => {
    const url = Category
      ? PRODUCTS_URL + `/category/${Category}`
      : PRODUCTS_URL;
    setLoading(true);
    getRequest(url)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={screenStyle.container}>
      <CategorySelect onSelect={value => getProducts(value)} />

      {loading ? (
        <Spinner />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={products}
          renderItem={({item}) => <ProductCard item={item} />}
        />
      )}
    </View>
  );
};

// define your styles

//make this component available to the app
export default ProductList;
