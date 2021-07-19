import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { headerScreenOptions } from '../constants/default-styles';

import ManageProductsScreen from '../screens/ManageProductsScreen';
import EditProductScreen from '../screens/EditProductScreen';

import DrawerHeaderButton from '../components/DrawerHeaderButton';
import AddHeaderButton from '../components/AddHeaderButton';
import SubmitHeaderButton from '../components/SubmitHeaderButton';

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
      <Stack.Screen name="EditProduct" component={EditProductScreen}
        options={({ route, navigation }) => {
          const handleSubmit = route.params?.handleSubmit;

          const headerRight = () => <SubmitHeaderButton onPress={() => {
            handleSubmit();
            navigation.navigate('ManageProducts');
          }} />
          return route.params?.productId !== undefined
            ? { title: 'Edit Product', headerRight }
            : { title: 'Add Product', headerRight };
        }} />
    </Stack.Navigator>
  );
};

export default ManageProductsNavigator;

