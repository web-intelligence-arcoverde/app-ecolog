import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  Input,
  Button,
  ButtonText,
  ButtonOutiline,
  ButtonOutilineText,
} from '../style';
const Index = ({navigation}) => {
  const goTo = name => {
    navigation.navigate(name);
  };

  const goBack = () => {
    navigation.goBack();
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
        <Text style={styles.text}>Recuperar conta</Text>

        <View>
          <Text
            style={{
              fontSize: 16,
              color: '#D8D8D8',
              marginTop: 12,
            }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </View>
      </View>

      <View
        style={{flexDirection: 'column', paddingLeft: 20, paddingRight: 20}}>
        <Input
          placeholderTextColor="#6C6C80"
          returnKeyType="go"
          placeholder="Informe seu email"
          style={{
            marginTop: 30,
            fontSize: 14,
            paddingLeft: 15,
          }}
        />

        <View
          style={{
            marginTop: 14,
            alignItems: 'flex-end',
            width: '100%',
          }}
        />

        <Button onPress={() => goTo('RecoveryAccount01')}>
          <ButtonText>Enviar código</ButtonText>
        </Button>

        <ButtonOutiline onPress={() => goBack()}>
          <ButtonOutilineText>Voltar</ButtonOutilineText>
        </ButtonOutiline>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    color: '#34CB79',
    fontWeight: 'bold',
    fontSize: 34,
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
