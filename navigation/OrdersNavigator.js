import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { headerScreenOptions } from '../constants/default-styles';

import DrawerHeaderButton from '../components/DrawerHeaderButton';
import OrdersScreen from '../screens/OrdersScreen';

const Stack = createStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerScreenOptions}>
      <Stack.Screen name="Orders" component={OrdersScreen}
        options={({ navigation }) => ({
          headerLeft: () => <DrawerHeaderButton onPress={navigation.toggleDrawer} />
        })}
      />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;

