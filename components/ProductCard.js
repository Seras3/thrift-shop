import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import { useTheme } from '@react-navigation/native';

import { useDispatch } from 'react-redux';
import { addProductToCart, deleteProductFromShop } from '../store/actions/shop';

import TextPrice from './TextPrice';

const ProductCard = ({ navigation, product, isManaging = false }) => {
  const { colors } = useTheme();

  const dispatch = useDispatch();

  const handleAddProductToCart = (id) => {
    dispatch(addProductToCart(id));
  }

  const handleDeleteProductFromShop = (id) => {
    dispatch(deleteProductFromShop(id));
  }

  const iconButton = {
    color: 'white',
    size: 30
  }

  let actions;
  if (isManaging) {
    actions = (
      <View style={styles.actionsContainer}>
        <Button
          containerStyle={styles.containerButton}
          buttonStyle={{ flex: 1, backgroundColor: colors.primaryDark }}
          icon={
            <AntDesign
              name="edit"
              size={iconButton.size}
              color={iconButton.color}
              style={styles.iconButton}
            />
          }
          title="Edit"
          onPress={() => {
            navigation.navigate('EditProduct', { productId: product.id })
          }}
        />
        <Button
          containerStyle={styles.containerButton}
          buttonStyle={{ flex: 1, backgroundColor: colors.delete }}
          icon={
            <Ionicons
              name="trash-outline"
              size={iconButton.size}
              color={iconButton.color}
              style={styles.iconButton}
            />
          }
          title="Delete"
          onPress={() => {
            handleDeleteProductFromShop(product.id);
          }} />
      </View>
    );
  } else {
    actions = (
      <View style={styles.actionsContainer}>
        <Button
          containerStyle={styles.containerButton}
          buttonStyle={{ flex: 1, backgroundColor: colors.primaryDark }}
          icon={
            <Icon
              name="search"
              size={iconButton.size}
              color={iconButton.color}
              style={styles.iconButton}
            />
          }
          title="View"
          onPress={() => {
            navigation.navigate('Details', { productId: product.id, productTitle: product.title });
          }}
        />
        <Button
          containerStyle={styles.containerButton}
          buttonStyle={{ flex: 1, backgroundColor: colors.primary }}
          icon={
            <Icon
              name="add-circle"
              size={iconButton.size}
              color={iconButton.color}
              style={styles.iconButton}
            />
          }
          title="Buy"
          onPress={() => {
            handleAddProductToCart(product.id);
          }} />
      </View>
    );
  };

  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri: product.imageUrl }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <TextPrice style={styles.price}>{product.price}</TextPrice>
      </View>
      {actions}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    height: 400,
    width: '100%',
    alignItems: 'center',
    marginBottom: 30
  },
  imgContainer: {
    width: '100%',
    height: '60%',
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
  textContainer: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20
  },
  actionsContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  containerButton: {
    minWidth: 100,
    width: '40%',
    height: 50
  },
  iconButton: {
    paddingRight: 10
  }
});
