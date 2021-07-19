import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import IoniconsHeaderButton from './IoniconsHeaderButton';

const CartHeaderButton = ({ onPress }) => {
  return (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item
        title="cart"
        iconName="cart-sharp"
        color="white"
        onPress={onPress}
      />
    </HeaderButtons>
  );
};

export default CartHeaderButton;
