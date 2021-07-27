import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import rootStore from './store/rootStore';

import Theme from './constants/theme';


const store = createStore(rootStore, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={Theme}>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};
