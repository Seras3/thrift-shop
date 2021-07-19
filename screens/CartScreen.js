import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { defaultStyles } from '../constants/default-styles';
import { useTheme } from '@react-navigation/native';

import { Button } from 'react-native-elements';
import { MaterialIcons } from '@expo/vector-icons';

import { useSelector, useDispatch } from 'react-redux';
import { deleteProductFromCart, placeOrder } from '../store/actions/shop';
import { truncateNDecimals } from '../utils/floats';
import ScrollableListLayout from '../components/ScrollableListLayout';
import CustomCard from '../components/CustomCard';


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
      <ScrollableListLayout>
        <CustomCard items={cart} handleDeleteProduct={handleDeleteProduct}>
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
        </CustomCard>
      </ScrollableListLayout>
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
  sumContainer: {
    marginVertical: 20,
  },
  textSum: {
    fontSize: 20
  },
  textSumMoney: {
    fontWeight: 'bold',
  },

});
