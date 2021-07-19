import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { defaultStyles } from '../constants/default-styles';

import { useSelector } from 'react-redux';

const CartScreen = (props) => {
  const cart = useSelector(state => state.shop.cart);

  let content;
  if (cart.length > 0) {
    content = (
      <View style={defaultStyles.container}>
        <Text>{JSON.stringify(cart, null, 4)}</Text>
      </View>
    );
  } else {
    content = (
      <View style={defaultStyles.container}>
        <Text>Your cart is empty.</Text>
        <Text>Take a look in our shop :)</Text>
      </View>
    );
  }

  return content;
};

export default CartScreen;

const styles = StyleSheet.create({});
