import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { defaultStyles } from '../constants/default-styles';
import ScrollableListLayout from '../components/ScrollableListLayout';

import { useSelector } from 'react-redux';
import CustomCard from '../components/CustomCard';
import { useTheme } from '@react-navigation/native';
import { truncateNDecimals } from '../utils/floats';

const OrdersScreen = (props) => {
  const { colors } = useTheme();
  const orders = useSelector(state => state.shop.orders);

  const getOrderTotal = (order) => {
    let sum = 0;
    order.forEach(item => { sum += item.cnt * item.product.price });
    return truncateNDecimals(sum, 2);
  }

  let content;
  if (orders.length > 0) {
    content = (
      <ScrollableListLayout>
        <FlatList
          style={defaultStyles.fillSize}
          data={orders}
          renderItem={({ item }) => (
            <View style={styles.orderItem}>
              <CustomCard items={item.items}>
                <View style={StyleSheet.compose(styles.cardHead, { backgroundColor: colors.primaryDark })}>
                  <Text style={StyleSheet.compose(styles.cardHeadText, { fontWeight: 'bold' })}>
                    {getOrderTotal(item.items)}<Text style={{ color: colors.primary }}>&nbsp;$</Text>
                  </Text>
                  <Text style={styles.cardHeadText}>
                    {new Date(item.date).toLocaleString()}
                  </Text>
                </View>
              </CustomCard>
            </View>
          )}
        />
      </ScrollableListLayout>
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

const styles = StyleSheet.create({
  orderItem: {
    marginBottom: 50
  },
  cardHead: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50
  },
  cardHeadText: {
    fontSize: 20,
    color: 'white'
  }
});
