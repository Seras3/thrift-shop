import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { headerScreenOptions } from '../constants/default-styles';

import ManageProductsScreen from '../screens/ManageProductsScreen';
import EditProductScreen from '../screens/EditProductScreen';
import DrawerHeaderButton from '../components/DrawerHeaderButton';

const Stack = createStackNavigator();

const ManageProductsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerScreenOptions}>
      <Stack.Screen name="ManageProducts" component={ManageProductsScreen}
        options={({ navigation }) => ({
          headerLeft: () => <DrawerHeaderButton onPress={navigation.toggleDrawer} />
        })}
      />
      <Stack.Screen name="EditProduct" component={EditProductScreen} />
    </Stack.Navigator>
  );
};

export default ManageProductsNavigator;

