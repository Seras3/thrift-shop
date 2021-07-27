import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { defaultStyles } from '../constants/default-styles';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../store/actions/shop';
import { useTheme } from '@react-navigation/native';

import ProductCard from '../components/ProductCard';

const ShopScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const { colors } = useTheme();

  const products = useSelector(state => state.shop.products);
  const dispatch = useDispatch();

  const loadProducts = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(fetchProducts());
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', loadProducts);
    return unsubscribe;
  }, [loadProducts]);


  if (error) {
    return <View style={defaultStyles.container}>
      <Text>An error occurred! :(</Text>
    </View>
  }

  if (isLoading) {
    return <View style={defaultStyles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  }

  if (!isLoading && products.length === 0) {
    return <View style={defaultStyles.container}>
      <Text>No products found.</Text>
      <Text>Maybe you should add some! :D</Text>
    </View>
  }

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
    marginTop: 10
  },
});
