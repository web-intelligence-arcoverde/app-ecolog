import React from 'react';
import {Input} from './style';

const Index = ({text, secureTextEntry}) => {
  return (
    <Input
      placeholderTextColor="#6C6C80"
      placeholder={text}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Index;
