import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import IoniconsHeaderButton from './IoniconsHeaderButton';

const AddHeaderButton = ({ onPress }) => {
  return (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item
        title="add"
        iconName="add-circle"
        color="white"
        onPress={onPress}
      />
    </HeaderButtons>
  );
};

export default AddHeaderButton;
