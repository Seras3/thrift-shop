import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import IoniconsHeaderButton from './IoniconsHeaderButton';

const SubmitHeaderButton = ({ onPress }) => {
  return (
    <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      <Item
        title="submit"
        iconName="checkmark-circle"
        color="white"
        iconSize={30}
        onPress={onPress}
      />
    </HeaderButtons>
  );
};

export default SubmitHeaderButton;
