import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from '@react-navigation/native'

const TextPrice = ({ style, children }) => {
  const { colors } = useTheme();

  return (
    <Text style={StyleSheet.compose({ color: colors.primary }, style)}>{children}$</Text>
  );
};

export default TextPrice;