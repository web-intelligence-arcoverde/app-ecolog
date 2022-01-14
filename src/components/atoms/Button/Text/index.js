import React from 'react';
import {Label} from 'components/atoms/Label';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Index = ({children, onPress, color, weight, size, props}) => {
  return (
    <Container onPress={() => onPress()} {...props}>
      <Label color={color} weight={weight} size={size}>
        {children}
      </Label>
    </Container>
  );
};

export default Index;
