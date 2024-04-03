//import liraries
import React, {Component, useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {screenStyle} from '../../styles/secreenStyle';
import StoreContext from '../../context/context';
import CartCard from '../../components/cart/cartCard';
import FavoritesCard from '../../components/favorites/favoritesCard';
import ListEmptyComponent from '../../components/uı/listEmptyComponent';

// create a component
const Favorites = () => {
  const {favorites} = useContext(StoreContext);
  return (
    <View style={screenStyle.container}>
      <FlatList
        ListEmptyComponent={() => <ListEmptyComponent />}
        showsVerticalScrollIndicator={false}
        data={favorites}
        renderItem={({item}) => <FavoritesCard item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Favorites;
