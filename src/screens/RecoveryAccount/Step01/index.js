import React from 'react';
import {StyleSheet, Image, KeyboardAvoidingView} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';
import {Label, Title} from 'components/atoms/Label';
import Input from 'components/atoms/Input/Default';
import Button from 'components/atoms/Button/Contained';
import OnlyTextButton from 'components/atoms/Button/Text';

import MiniLogo from 'assets/images/mini-logo.png';

import Exemple from './Exemple';

import HeaderButtonBackRoute from 'components/atoms/HeaderButtonBackRoute';
const Index = ({navigation}) => {
  const goTo = name => {
    navigation.navigate(name);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Container justify="center" align="center">
        <HeaderButtonBackRoute backToPreviusScreen={() => goBack()} />

        <StyledContainer direction="column" width={90}>
          <StyledContainer>
            <Title size={26} color="green">
              Verifique seu email
            </Title>
          </StyledContainer>

          <StyledContainer style={{marginTop: 4}}>
            <Label color="silver" size={14}>
              Por favor insira o código de 4 dígitos enviado para o seu email.
            </Label>
          </StyledContainer>

          <StyledContainer
            justify="center"
            align="center"
            style={{marginTop: 10}}>
            <Exemple />
          </StyledContainer>

          <StyledContainer
            justify="flex-end"
            align="flex-end"
            style={{marginTop: 6}}>
            <OnlyTextButton color="green" onPress={() => console.log('Lucas')}>
              Reenviar o código
            </OnlyTextButton>
          </StyledContainer>

          <Button
            onPress={() => goTo('RecoveryAccount02')}
            disabled={true}
            background="silver">
            Verificar código
          </Button>
        </StyledContainer>

        <StyledContainer align="center" style={style.imgFooter}>
          <Image source={MiniLogo} />
        </StyledContainer>
      </Container>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  distance: {
    marginTop: 18,
  },
  imgFooter: {
    position: 'absolute',
    bottom: 10,
  },
});

export default Index;
