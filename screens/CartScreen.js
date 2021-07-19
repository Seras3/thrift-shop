import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

import { defaultStyles } from '../constants/default-styles';
import { useTheme } from '@react-navigation/native';

import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';
import { deleteProductFromCart, placeOrder } from '../store/actions/shop';
import DeleteItemButton from '../components/DeleteItemButton';
import { truncateNDecimals } from '../utils/floats';


const CartScreen = (props) => {
  const { colors } = useTheme();

  const cart = useSelector(state => state.shop.cart);
  const dispatch = useDispatch();

  const getCartSum = () => {
    let sum = 0;
    cart.forEach(cartItem => { sum += cartItem.cnt * cartItem.product.price });
    return truncateNDecimals(sum, 2);
  }

  const handleDeleteProduct = (id) => {
    dispatch(deleteProductFromCart(id));
  };

  const handlePlaceOrder = () => {
    dispatch(placeOrder());
  };

  let content;
  if (cart.length > 0) {
    content = (
      <View style={defaultStyles.container}>
        <ScrollView style={defaultStyles.fillSize}>
          <View style={StyleSheet.compose(defaultStyles.container, styles.screen)}>
            <View style={StyleSheet.compose(styles.cardContainer, { borderColor: colors.primary })}>
              <View style={styles.sumContainer}>
                <Text style={styles.textSum}>TOTAL SUM :&nbsp;
                  <Text style={StyleSheet.compose(styles.textSumMoney, { color: colors.primary })}>
                    {getCartSum()}$
                  </Text>
                </Text>
              </View>
              <Button
                buttonStyle={{ paddingVertical: 10, paddingHorizontal: 15, backgroundColor: colors.primary }}
                icon={
                  <MaterialIcons
                    name="local-shipping"
                    size={25}
                    color="white"
                    style={{ marginRight: 10 }}
                  />
                }
                title="Place Order"
                onPress={() => { handlePlaceOrder() }}
              />
              <FlatList
                keyExtractor={(item) => item.product.id}
                style={styles.list}
                data={cart}
                renderItem={(itemData) =>
                (
                  <View style={StyleSheet.compose(styles.cartRow, { borderColor: colors.primary })}>
                    <Text style={styles.textCnt}>{itemData.item.cnt} x</Text>
                    <Text style={styles.textTitle}>{itemData.item.product.title}</Text>
                    <Text style={styles.textPrice}>{itemData.item.product.price}$</Text>
                    <DeleteItemButton onPress={() => handleDeleteProduct(itemData.item.product.id)} />
                  </View>
                )}
              />
            </View>
          </View>
        </ScrollView>
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

const styles = StyleSheet.create({
  screen: {
    marginVertical: 20,
  },
  list: {
    width: '90%',
    flex: 1,
    marginTop: 30
  },
  cardContainer: {
    width: '90%',
    height: '100%',
    marginVertical: 20,
    backgroundColor: '#f2e5c9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 2
  },
  sumContainer: {
    marginVertical: 20,
  },
  textSum: {
    fontSize: 20
  },
  textSumMoney: {
    fontWeight: 'bold',
  },
  cartRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    borderBottomWidth: 2,
  },
  textCnt: {
    fontSize: 15,
    flex: 1
  },
  textTitle: {
    fontSize: 15,
    flex: 3
  },
  textPrice: {
    fontSize: 15,
    flex: 1,
    textAlign: 'right'
  }
});
