import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';
import {Label, Title} from 'components/atoms/Label';
import Input from 'components/atoms/Input/Default';
import Button from 'components/atoms/Button/Contained';
import TextButton from 'components/atoms/Button/Outline';

import Logo from 'assets/images/logo-background-information.png';
import MiniLogo from 'assets/images/mini-logo.png';

const Index = ({navigation}) => {
  const goTo = name => {
    navigation.navigate(name);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container justify="center" align="center">
      <Image source={Logo} style={{position: 'absolute', top: -90, left: 0}} />
      <StyledContainer direction="column" width={90}>
        <Title size={32} color="green">
          Definir senha
        </Title>

        <StyledContainer style={style.distance}>
          <Label color="silver" size={16}>
            Certifique-se de que as senhas sejam iguais.
          </Label>
        </StyledContainer>

        <StyledContainer style={style.distance}>
          <Input text="Informe a sua nova senha" />
        </StyledContainer>

        <StyledContainer style={style.distance}>
          <Input text="Repita a senha" />
        </StyledContainer>

        <Button onPress={() => goTo('SignUp03')}>Finalizar</Button>

        <StyledContainer style={style.distance}>
          <TextButton onPress={() => goBack()} color="green" weight="bold">
            Voltar
          </TextButton>
        </StyledContainer>
      </StyledContainer>

      <StyledContainer
        align="center"
        style={{
          position: 'absolute',
          bottom: 10,
        }}>
        <Image source={MiniLogo} />
      </StyledContainer>
    </Container>
  );
};

const style = StyleSheet.create({
  distance: {
    marginTop: 22,
  },
});

export default Index;
