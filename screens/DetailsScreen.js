import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';

import { PRODUCTS } from '../data/dummy-data';
import TextPrice from '../components/TextPrice';
import BuyButton from '../components/BuyButton';

const DetailsScreen = ({ navigation, route }) => {
  const fetchProduct = (id) => PRODUCTS.find(item => item.id === id);
  const product = fetchProduct(route.params.productId);
  const headerHeight = useHeaderHeight();

  return (
    <View style={{ flex: 1, minHeight: (Dimensions.get('window').height - headerHeight) }}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: product.imageUrl }} />
      </View>
      <View style={styles.content}>
        <TextPrice style={styles.price}>{product.price}</TextPrice>
        <Text style={styles.description}>{product.description}</Text>
        <BuyButton containerStyle={{ width: '90%', marginBottom: 30 }}
          title="Add to cart"
          onPress={() => {
            navigation.navigate('Cart');
          }}
        />
      </View>
    </View>
  );
};


export default DetailsScreen;

const styles = StyleSheet.create({
  imgContainer: {
    width: '100%',
    height: 300,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 30,
    elevation: 4
  },
  img: {
    width: '100%',
    height: '100%'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingHorizontal: 15,
  },
  price: {
    fontSize: 25
  },
  description: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'rgba(0, 0, 0, 0.6)'
  }
});
