import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';

import Button from 'components/atoms/Button/Contained';
import Input from 'components/atoms/Input/Default';
import {Container, StyledContainer} from 'components/atoms/Container';
import Logo from 'assets/images/mini-logo.png';

import MainLogo from 'assets/images/logo-sem-nome.png';

import {Description} from 'components/atoms/Label';

import {COLORS} from '../../constants';

const Index = ({navigation}) => {
  const goTo = name => {
    navigation.navigate(name);
  };
  return (
    <Container align="center" behavior="padding">
      <StyledContainer
        width={90}
        style={{
          marginTop: 26,
        }}>
        <StyledContainer justify="center" align="center">
          <Image source={MainLogo} />
          <Text style={styles.text}>Ecolog</Text>
          <StyledContainer
            align="center"
            justify="center"
            style={{
              marginTop: 8,
            }}>
            <Description>
              Seu marketplace de coleta de resíduos, ajudamos pessoas a
              encontrarem pontos de coleta de forma eficiente.
            </Description>
          </StyledContainer>
        </StyledContainer>

        <StyledContainer
          style={{
            marginTop: 42,
          }}>
          <Input text="Email" />
        </StyledContainer>

        <StyledContainer
          style={{
            marginTop: 18,
          }}>
          <Input text="Password" secureTextEntry={true} />
        </StyledContainer>

        <StyledContainer
          align="flex-end"
          style={{
            marginTop: 14,
          }}>
          <Text style={styles.recovery} onPress={() => goTo('RecoveryAccount')}>
            Esqueceu sua senha?
          </Text>
        </StyledContainer>

        <Button onPress={() => goTo('Dashboard')}>Entrar</Button>
      </StyledContainer>

      <StyledContainer
        direction="row"
        justify="center"
        style={{
          marginTop: 30,
          elevation: 1,
        }}>
        <Text style={styles.text1}>Novo por aqui?</Text>
        <Text style={styles.text2} onPress={() => goTo('SignUp')}>
          Registre-se!
        </Text>
      </StyledContainer>
      <StyledContainer
        align="center"
        style={{
          position: 'absolute',
          bottom: 10,
        }}>
        <Image source={Logo} />
      </StyledContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    marginTop: 8,
    color: '#34CB79',
    fontWeight: 'bold',
    fontSize: 42,
  },
  card: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    // background color must be set
    backgroundColor: '#0000', // invisible col
  },
  recovery: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 16,
    color: '#34cb79',
  },
  text1: {
    fontSize: 14,
    lineHeight: 16,
    color: '#34cb79',
  },
  text2: {
    marginLeft: 4,
    fontSize: 14,
    lineHeight: 16,
    color: `${COLORS.silver}`,
    fontWeight: 'bold',
  },
});

export default Index;
