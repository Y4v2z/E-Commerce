//import liraries
import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/color';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/url';

// create a component
const CategorySelect = ({onSelect}) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const getCtegories = () => {
    getRequest(CATEGORIES_URL)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const selectCategory = category => {
    setCategory(category);
    onSelect(category);
  };
  useEffect(() => {
    getCtegories();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => selectCategory(item)}
        style={item == category ? styles.active : styles.inActive}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginVertical: 10,
  },
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
export default CategorySelect;
