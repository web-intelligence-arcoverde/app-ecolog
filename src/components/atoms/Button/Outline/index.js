import React from 'react';
import {Label} from 'components/atoms/Label';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #34cb79;
  height: 56px;
  border-radius: 8px;
`;

const Index = ({children, onPress, color, weight, size}) => {
  return (
    <Container onPress={() => onPress()}>
      <Label color={color} weight={weight} size={size}>
        {children}
      </Label>
    </Container>
  );
};

export default Index;
