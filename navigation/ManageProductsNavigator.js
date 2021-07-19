import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { headerScreenOptions } from '../constants/default-styles';

import ManageProductsScreen from '../screens/ManageProductsScreen';
import EditProductScreen from '../screens/EditProductScreen';

import DrawerHeaderButton from '../components/DrawerHeaderButton';
import AddHeaderButton from '../components/AddHeaderButton';

const Stack = createStackNavigator();

const ManageProductsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={headerScreenOptions}>
      <Stack.Screen name="ManageProducts" component={ManageProductsScreen}
        options={({ navigation }) => ({
          title: "Your Products",
          headerLeft: () => <DrawerHeaderButton onPress={navigation.toggleDrawer} />,
          headerRight: () => <AddHeaderButton onPress={() => navigation.navigate('EditProduct')} />
        })}
      />
      <Stack.Screen name="EditProduct" component={EditProductScreen} />
    </Stack.Navigator>
  );
};

export default ManageProductsNavigator;

