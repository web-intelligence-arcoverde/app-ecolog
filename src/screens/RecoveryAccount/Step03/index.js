import React from 'react';
import {StyleSheet, Image} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';
import {Label, Title} from 'components/atoms/Label';
import Button from 'components/atoms/Button/Contained';

import Logo from 'assets/images/logo-background-information.png';
import MiniLogo from 'assets/images/mini-logo.png';

const Index = ({navigation}) => {
  const goTo = name => {
    navigation.navigate(name);
  };

  return (
    <Container justify="center" align="center">
      <Image source={Logo} style={{position: 'absolute', top: -90, left: 0}} />
      <StyledContainer direction="column" width={90}>
        <Title size={32} color="green">
          Senha redefinida com sucesso
        </Title>

        <StyledContainer style={style.distance}>
          <Label color="silver" size={16}>
            Incrível! você atualizou sua senha com sucesso
          </Label>
        </StyledContainer>

        <Button onPress={() => goTo('SignIn')}>Volte para fazer login</Button>
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
    marginTop: 6,
  },
});

export default Index;
