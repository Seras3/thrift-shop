import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ShopNavigator from './ShopNavigator';
import OrdersNavigator from './OrdersNavigator';
import ManageProductsNavigator from './ManageProductsNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Shop" component={ShopNavigator} />
      <Drawer.Screen name="Orders" component={OrdersNavigator} />
      <Drawer.Screen name="ManageProducts" component={ManageProductsNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

