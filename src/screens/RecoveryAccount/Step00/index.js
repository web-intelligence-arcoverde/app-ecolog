import React from 'react';
import {StyleSheet, Image} from 'react-native';

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
      <Image source={Logo} style={{position: 'absolute', top: -120, left: 0}} />
      <StyledContainer direction="column" width={90}>
        <StyledContainer>
          <Title size={32} color="green">
            Esqueceu a senha
          </Title>
        </StyledContainer>
        <StyledContainer style={{marginTop: 22}}>
          <Label color="silver" size={16}>
            Entre com seu email associado à sua conta e enviaremos um email com
            um codigo para redifinir sua senha.
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

        <StyledContainer style={style.distance}>
          <TextButton color="green" weight="bold" onPress={() => goBack()}>
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
