import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useSelector } from 'react-redux';
import ProductForm from '../components/ProductForm';

import { defaultStyles } from '../constants/default-styles';

const EditProductScreen = ({ navigation, route }) => {
  const products = useSelector(state => state.shop.products);

  const productId = route.params?.productId;
  const product = products.find(product => product.id === productId);

  return (
    <View style={defaultStyles.container}>
      <ProductForm navigation={navigation} product={product} />
    </View>
  );
};

export default EditProductScreen;
