import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Input} from './style';

import Button from 'components/atoms/Button/Contained';
import {Container, StyledContainer} from 'components/atoms/Container';
import Logo from 'assets/images/mini-logo.png';

const Index = ({navigation}) => {
  const goTo = name => {
    navigation.navigate(name);
  };
  return (
    <Container justify="center" align="center">
      <StyledContainer width={90}>
        <StyledContainer>
          <Text style={styles.text}>Ecolog</Text>
        </StyledContainer>

        <StyledContainer
          style={{
            marginTop: 18,
          }}>
          <Input
            placeholderTextColor="#6C6C80"
            returnKeyType="go"
            placeholder="Email"
          />
        </StyledContainer>

        <StyledContainer
          style={{
            marginTop: 18,
          }}>
          <Input
            placeholder="Password"
            placeholderTextColor="#6C6C80"
            returnKeyType="go"
            secureTextEntry={true}
          />
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

      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
        }}>
        <Text style={styles.text1}>Novo por aqui?</Text>
        <Text style={styles.text2} onPress={() => goTo('SignUp')}>
          Registre-se!
        </Text>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          width: '100%',
          alignItems: 'center',
        }}>
        <Image source={Logo} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    color: '#34CB79',
    fontWeight: 'bold',
    fontSize: 54,
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
    color: '#34cb79',
    fontWeight: 'bold',
  },
});

export default Index;
