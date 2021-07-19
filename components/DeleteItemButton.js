import React from 'react';
import { StyleSheet } from 'react-native';

import { Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';


const DeleteItemButton = ({ style, containerStyle, buttonStyle, iconSize = 25, title = "", onPress }) => {

  return (
    <Button
      style={style}
      containerStyle={StyleSheet.compose(styles.container, containerStyle)}
      buttonStyle={StyleSheet.compose(styles.button, buttonStyle)}
      icon={
        <Ionicons
          name="trash-outline"
          size={iconSize}
          color="#f06156"
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
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10%',
    marginLeft: 30
  },
  button: {
    flex: 1,
    backgroundColor: 'transparent'
  }
});