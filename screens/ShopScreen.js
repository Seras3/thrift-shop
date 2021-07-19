import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { defaultStyles } from '../constants/default-styles';

import { useSelector } from 'react-redux';

import ProductCard from '../components/ProductCard';

const ShopScreen = (props) => {
  const products = useSelector(state => state.shop.products);


  return (
    <View style={defaultStyles.container}>
      <FlatList
        style={styles.list}
        data={products}
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
