import React from 'react';

import {Image, StyleSheet} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';

import {Title, Description, Label} from 'components/atoms/Label';

import People from 'assets/images/garbage-car.png';

import Button from 'components/atoms/Button/Contained';
import TextButton from 'components/atoms/Button/Text';

const Index = ({navigation}) => {
  const goTo = name => {
    navigation.navigate(name);
  };

  return (
    <Container justify="center" align="center">
      <StyledContainer>
        <Image source={People} resizeMode="contain" style={style.img} />
      </StyledContainer>

      <StyledContainer align="center">
        <Title>É fácil</Title>
      </StyledContainer>

      <StyledContainer align="center" justify="center" style={style.distance}>
        <StyledContainer align="center" justify="center" width={60}>
          <Description>
            encontre coletores de recicláveis ​​ou pontos de coleta mais
            próximos de sua casa
          </Description>
        </StyledContainer>
      </StyledContainer>

      <StyledContainer width={90}>
        <Button onPress={() => goTo('SignIn')}>Pular</Button>
      </StyledContainer>

      <StyledContainer direction="row" justify="center" style={style.distance}>
        <Label color="silver">Novo por aqui?</Label>
        <StyledContainer width={20} style={style.signUp}>
          <TextButton
            color="green"
            weight="bold"
            onPress={() => goTo('SignUp')}>
            Registre-se!
          </TextButton>
        </StyledContainer>
      </StyledContainer>
    </Container>
  );
};

const style = StyleSheet.create({
  signUp: {
    marginLeft: 4,
  },
  img: {
    width: '100%',
    height: 300,
  },
  distance: {marginTop: 12},
});

export default Index;
