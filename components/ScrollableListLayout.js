import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { defaultStyles } from '../constants/default-styles';

const ScrollableListLayout = ({ children, marginVertical = 20, marginHorizontal = '7%' }) => {

  return (
    <View style={defaultStyles.container}>
      <ScrollView style={defaultStyles.fillSize}>
        <View style={StyleSheet.compose(defaultStyles.container, { marginVertical, marginHorizontal })}>
          {children}
        </View>
      </ScrollView>
    </View>
  );
};

export default ScrollableListLayout;


