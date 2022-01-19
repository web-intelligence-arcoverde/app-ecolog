import React from 'react';
import {StyleSheet, Image, KeyboardAvoidingView} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';
import {Label, Title} from 'components/atoms/Label';
import Input from 'components/atoms/Input/Default';
import Button from 'components/atoms/Button/Contained';

import MiniLogo from 'assets/images/mini-logo.png';

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
      <Container justify="center" align="center" padding={10}>
        <HeaderButtonBackRoute backToPreviusScreen={() => goBack()} />
        <StyledContainer direction="column">
          <StyledContainer>
            <Title size={28} color="green">
              Recuperar senha
            </Title>
          </StyledContainer>
          <StyledContainer>
            <Label color="silver" size={14}>
              Entre com seu email associado à sua conta que enviaremos um email
              com um codigo para redifinir sua senha.
            </Label>
          </StyledContainer>

          <StyledContainer style={style.distance}>
            <Input text="Informe seu email" />
          </StyledContainer>

          <StyledContainer>
            <Button onPress={() => goTo('RecoveryAccount01')}>
              Enviar código
            </Button>
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
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  distance: {
    marginTop: 22,
  },
});

export default Index;
