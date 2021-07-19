import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import IoniconsHeaderButton from './IoniconsHeaderButton';

const DrawerHeaderButton = ({ onPress }) => {
  return (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item
        title="drawer"
        iconName="menu-sharp"
        color="white"
        onPress={onPress}
      />
    </HeaderButtons>
  );
};

export default DrawerHeaderButton;
