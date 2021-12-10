import React from 'react';
import {Input, Container, TextError} from './style';

const Index = ({text, secureTextEntry, error, ...inputProps}) => {
  return (
    <Container>
      <Input
        placeholderTextColor="#6C6C80"
        placeholder={text}
        secureTextEntry={secureTextEntry}
        {...inputProps}
      />
      {!!error && <TextError>{error.message}</TextError>}
    </Container>
  );
};

export default Index;
