import React from 'react';
import {Image} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';

import Planet from 'assets/images/save-the-planet.png';
import {Title, Description} from 'components/atoms/Label';

import Button from 'components/atoms/Button/Contained';

const Index = ({navigation}) => {
  const goTo = name => {
    navigation.navigate(name);
  };

  return (
    <Container justify="center" align={'center'}>
      <StyledContainer>
        <Image
          source={Planet}
          resizeMode="contain"
          style={{width: '100%', height: 300}}
        />
      </StyledContainer>

      <StyledContainer align="center">
        <Title>Seja consciente</Title>
      </StyledContainer>

      <StyledContainer align="center" justify="center">
        <StyledContainer
          align="center"
          justify="center"
          width={50}
          style={{marginTop: 10}}>
          <Description>
            Ajudar o meio ambiente, catadores e cooperativas cadastradas.
          </Description>
        </StyledContainer>
      </StyledContainer>

      <StyledContainer width={90}>
        <Button onPress={() => goTo('SignIn')}>Vamos lá</Button>
      </StyledContainer>
    </Container>
  );
};

export default Index;
