import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { defaultStyles } from '../constants/default-styles';

import { useSelector } from 'react-redux';

const ManageProductsScreen = (props) => {
  const products = useSelector(state => state.shop.products);
  const identity = useSelector(state => state.shop.identity);

  const myProducts = products.filter(product => product.owner === identity);

  let content;
  if (myProducts.length > 0) {
    content = (
      <View style={defaultStyles.container}>
        <Text>{JSON.stringify(myProducts, null, 4)}</Text>
      </View>
    );
  } else {
    content = (
      <View style={defaultStyles.container}>
        <Text>Add your first product!</Text>
        <Text>Hit top right button.</Text>
      </View>
    );
  }

  return content;
};

export default ManageProductsScreen;

const styles = StyleSheet.create({});
