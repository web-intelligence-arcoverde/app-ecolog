import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import Logo from '../../assets/images/mini-logo.png';

import {Input, Button, ButtonText} from './style';
const Index = ({navigation}) => {
  const goTo = name => {
    navigation.navigate(name);
  };
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'column',
          paddingLeft: 20,
          paddingRight: 20,
        }}>
        <Text style={styles.text}>Ecolog</Text>
      </View>

      <View
        style={{flexDirection: 'column', paddingLeft: 20, paddingRight: 20}}>
        <Input
          placeholderTextColor="#6C6C80"
          returnKeyType="go"
          placeholder="Email"
          style={{
            marginTop: 30,
            fontSize: 14,
            paddingLeft: 15,
          }}
        />

        <Input
          style={{
            marginTop: 30,
            fontSize: 14,
            paddingLeft: 15,
          }}
          placeholder="Password"
          placeholderTextColor="#6C6C80"
          returnKeyType="go"
          secureTextEntry={true}
        />

        <View
          style={{
            marginTop: 14,
            alignItems: 'flex-end',
            width: '100%',
          }}>
          <Text style={styles.recovery} onPress={() => goTo('RecoveryAccount')}>
            Esqueceu sua senha?
          </Text>
        </View>

        <Button onPress={() => goTo('Dashboard')}>
          <ButtonText>Entrar</ButtonText>
        </Button>
      </View>

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
    </View>
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
