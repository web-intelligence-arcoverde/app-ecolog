import React from 'react';

import {Image} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';

import {Title, Description} from 'components/atoms/Label';

import People from 'assets/images/people-recycle.png';

const Index = () => {
  return (
    <Container justify="center">
      <StyledContainer>
        <Image
          source={People}
          resizeMode="contain"
          style={{width: '100%', height: 230}}
        />
      </StyledContainer>
      <StyledContainer align="center">
        <Title>Ajude o meio ambiente</Title>
      </StyledContainer>

      <StyledContainer align="center" justify="center" style={{marginTop: 10}}>
        <StyledContainer align="center" justify="center" width={50}>
          <Description>
            Incentive seus amigos e vizinhos a descartar o lixo corretamente.
          </Description>
        </StyledContainer>
      </StyledContainer>
    </Container>
  );
};

export default Index;
