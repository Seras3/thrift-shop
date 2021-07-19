import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { headerScreenOptions } from '../constants/default-styles';

import ShopScreen from '../screens/ShopScreen';
import DetailsScreen from '../screens/DetailsScreen';
import CartScreen from '../screens/CartScreen';

import CartHeaderButton from '../components/CartHeaderButton';
import DrawerHeaderButton from '../components/DrawerHeaderButton';

const Stack = createStackNavigator();

const ShopNavigator = () => {

  return (
    <Stack.Navigator screenOptions={headerScreenOptions}>
      <Stack.Screen name="Shop" component={ShopScreen}
        options={({ navigation }) => ({
          headerLeft: () => <DrawerHeaderButton onPress={navigation.toggleDrawer} />
        })}
      />
      <Stack.Screen name="Details" component={DetailsScreen}
        options={({ route }) => ({
          title: route.params?.productTitle,
          headerRight: () => <CartHeaderButton onPress={() => { console.log("CART") }} />
        })} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;

