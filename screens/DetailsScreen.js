import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { useHeaderHeight } from '@react-navigation/stack';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Icon } from 'react-native-elements';

import TextPrice from '../components/TextPrice';

import { addProductToCart } from '../store/actions/shop';

const DetailsScreen = ({ navigation, route }) => {
  const headerHeight = useHeaderHeight();
  const { colors } = useTheme();

  const products = useSelector(state => state.shop.products);
  const dispatch = useDispatch();

  const getProduct = (id) => products.find(item => item.id === id);


  const handleAddProductToCart = (id) => {
    dispatch(addProductToCart(id));
  }

  const product = getProduct(route.params.productId);


  return (
    <View style={{ flex: 1, minHeight: (Dimensions.get('window').height - headerHeight) }}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: product.imageUrl }} />
      </View>
      <View style={styles.content}>
        <TextPrice style={styles.price}>{product.price}</TextPrice>
        <Text style={styles.description}>{product.description}</Text>
        <Button
          containerStyle={{ width: '90%', marginBottom: 30 }}
          buttonStyle={{ flex: 1, backgroundColor: colors.primary }}
          icon={
            <Icon
              name="add-circle"
              size={30}
              color='white'
              style={{ paddingRight: 10 }}
            />
          }
          title="Add to cart"
          onPress={() => {
            handleAddProductToCart(product.id);
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
