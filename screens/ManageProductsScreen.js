import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

import { defaultStyles } from '../constants/default-styles';

import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const ManageProductsScreen = (props) => {
  const products = useSelector(state => state.shop.products);
  const identity = useSelector(state => state.shop.identity);

  const myProducts = products.filter(product => product.owner === identity);

  let content;
  if (myProducts.length > 0) {
    content = (
      <View style={defaultStyles.container}>
        <FlatList
          style={styles.list}
          data={myProducts}
          renderItem={(itemData) => <ProductCard navigation={props.navigation} product={itemData.item} isManaging />}
        />
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

const styles = StyleSheet.create({
  list: {
    width: '90%',
    flex: 1,
    marginTop: 30
  },
});
