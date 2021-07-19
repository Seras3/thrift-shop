import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Button, Icon } from 'react-native-elements';

const BuyButton = ({ containerStyle, buttonStyle, iconSize = 30, title = "Buy", onPress }) => {
  const { colors } = useTheme();

  return (
    <Button
      containerStyle={StyleSheet.compose({ minWidth: 100, width: '40%', height: 50 }, containerStyle)}
      buttonStyle={StyleSheet.compose({ flex: 1, backgroundColor: colors.primary }, buttonStyle)}
      icon={
        <Icon
          name="add-circle"
          size={iconSize}
          color="white"
          style={{ paddingRight: 10 }}
        />
      }
      title={title}
      onPress={onPress}
    />
  )
}

export default BuyButton;