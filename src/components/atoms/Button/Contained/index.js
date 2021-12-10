import React from 'react';
import {Button, ButtonText} from './style';

const Index = ({children, onPress, background, disabled}) => {
  return (
    <Button
      onPress={() => onPress()}
      background={background}
      disabled={disabled}>
      <ButtonText>{children}</ButtonText>
    </Button>
  );
};

export default Index;
