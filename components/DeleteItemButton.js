import React from 'react';
import { StyleSheet } from 'react-native';

import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '@react-navigation/native';

const DeleteItemButton = ({ style, containerStyle, buttonStyle, iconSize = 25, title = "", onPress }) => {
  const { colors } = useTheme();

  return (
    <Button
      style={style}
      containerStyle={StyleSheet.compose(styles.container, containerStyle)}
      buttonStyle={StyleSheet.compose(styles.button, buttonStyle)}
      icon={
        <Ionicons
          name="trash-outline"
          size={iconSize}
          color={colors.delete}
        />
      }
      title={title}
      onPress={onPress}
    />

  )
}

export default DeleteItemButton;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 15
  },
  button: {
    flex: 1,
    backgroundColor: 'transparent'
  }
});