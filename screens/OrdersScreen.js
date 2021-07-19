import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { defaultStyles } from '../constants/default-styles';

import { useSelector } from 'react-redux';

const OrdersScreen = (props) => {
  const orders = useSelector(state => state.shop.orders);

  let content;
  if (orders.length > 0) {
    content = (
      <View style={defaultStyles.container}>
        <Text>{JSON.stringify(orders, null, 4)}</Text>
      </View>
    );
  } else {
    content = (
      <View style={defaultStyles.container}>
        <Text>You don't have any order until now.</Text>
        <Text>Go buy something cool! :D</Text>
      </View>
    );
  }

  return content;
};

export default OrdersScreen;

const styles = StyleSheet.create({});
