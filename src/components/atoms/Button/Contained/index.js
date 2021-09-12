import React from 'react';
import {Button, ButtonText} from './style';

const Index = ({children, onPress}) => {
  return (
    <Button onPress={() => onPress()}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};

export default Index;
