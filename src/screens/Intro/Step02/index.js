import React from 'react';

import {Image} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';

import {Title, Description} from 'components/atoms/Label';

import People from 'assets/images/garbage-car.png';

const Index = () => {
  return (
    <Container justify="center">
      <StyledContainer>
        <Image
          source={People}
          resizeMode="contain"
          style={{width: '100%', height: 300}}
        />
      </StyledContainer>

      <StyledContainer align="center">
        <Title>É fácil</Title>
      </StyledContainer>

      <StyledContainer align="center" justify="center">
        <StyledContainer
          align="center"
          justify="center"
          width={50}
          style={{marginTop: 10}}>
          <Description>
            encontre coletores de recicláveis ​​ou pontos de coleta mais
            próximos de sua casa
          </Description>
        </StyledContainer>
      </StyledContainer>
    </Container>
  );
};

export default Index;
