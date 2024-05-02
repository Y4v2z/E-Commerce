//import liraries
import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {AppColors} from '../../theme/color';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/url';
import CategoryCard from '../../components/categories/categoryCard';
import {screenStyle} from '../../styles/secreenStyle';
import Spinner from '../../components/uı/spinner';

// create a component
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCtegories = () => {
    setLoading(true);
    getRequest(CATEGORIES_URL)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getCtegories();
  }, []);

  return (
    <View style={screenStyle.container}>
      {loading ? (
        <Spinner />
      ) : (
        <FlatList
          data={categories}
          renderItem={({item}) => <CategoryCard item={item} />}
        />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  active: {
    padding: 12,
    backgroundColor: AppColors.PRIMARY,
    marginRight: 8,
    borderRadius: 100,
  },
  inActive: {
    padding: 12,
    backgroundColor: AppColors.SOFTGRAY,
    marginRight: 8,
    borderRadius: 100,
  },
});

//make this component available to the app
export default Categories;
