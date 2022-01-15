import React from 'react';
import {Input, Container, TextError} from './style';
import {COLORS} from '../../../../constants';

const Index = ({text, secureTextEntry, error, ...inputProps}) => {
  return (
    <Container>
      <Input
        placeholderTextColor={COLORS.silver}
        placeholder={text}
        secureTextEntry={secureTextEntry}
        {...inputProps}
      />
      {!!error && <TextError>{error.message}</TextError>}
    </Container>
  );
};

export default Index;
