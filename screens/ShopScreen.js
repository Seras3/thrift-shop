import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { defaultStyles } from '../constants/default-styles';

import { PRODUCTS } from '../data/dummy-data';

import ProductCard from '../components/ProductCard';

const ShopScreen = (props) => {

  return (
    <View style={defaultStyles.container}>
      <FlatList
        style={styles.list}
        data={PRODUCTS}
        renderItem={(itemData) => <ProductCard navigation={props.navigation} product={itemData.item} />}
      />
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({
  list: {
    width: '90%',
    flex: 1,
    marginTop: 30
  },
});
