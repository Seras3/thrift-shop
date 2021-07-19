import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Theme from './constants/theme';

import DrawerNavigator from './navigation/DrawerNavigator';

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
