import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from '../../../../constants';

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 38px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: #d8d8d8;
  font-weight: bold;
`;

const Index = ({children}) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

export default Index;
