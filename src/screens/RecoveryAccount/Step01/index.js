import React from 'react';
import {StyleSheet, Image} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';
import {Label, Title} from 'components/atoms/Label';
import Input from 'components/atoms/Input/Default';
import Button from 'components/atoms/Button/Contained';
import TextButton from 'components/atoms/Button/Outline';
import OnlyTextButton from 'components/atoms/Button/Text';

import MiniLogo from 'assets/images/mini-logo.png';
import Logo from 'assets/images/logo-background-information.png';
const Index = ({navigation}) => {
  const goTo = name => {
    navigation.navigate(name);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container justify="center" align="center">
      <Image source={Logo} style={style.imgTop} />

      <StyledContainer direction="column" width={90}>
        <StyledContainer>
          <Title size={32} color="green">
            Verifique seu email
          </Title>
        </StyledContainer>

        <StyledContainer style={{marginTop: 22}}>
          <Label color="silver" size={16}>
            Por favor insira o código de 4 dígitos enviado para o seu email
          </Label>
        </StyledContainer>

        <StyledContainer style={style.distance}>
          <Input text="Informe o código enviado para seu email" />
        </StyledContainer>

        <StyledContainer justify="flex-end" align="flex-end">
          <StyledContainer style={{marginTop: 6}} width={35}>
            <OnlyTextButton color="green" onPress={() => console.log('Lucas')}>
              Reenviar o código
            </OnlyTextButton>
          </StyledContainer>
        </StyledContainer>

        <Button onPress={() => goTo('RecoveryAccount02')}>
          Verificar código
        </Button>
        <StyledContainer style={style.distance}>
          <TextButton onPress={() => goBack()} color="green" weight="bold">
            Voltar
          </TextButton>
        </StyledContainer>
      </StyledContainer>

      <StyledContainer align="center" style={style.imgFooter}>
        <Image source={MiniLogo} />
      </StyledContainer>
    </Container>
  );
};

const style = StyleSheet.create({
  distance: {
    marginTop: 22,
  },
  imgTop: {position: 'absolute', top: -60, left: 0},
  imgFooter: {
    position: 'absolute',
    bottom: 10,
  },
});

export default Index;
