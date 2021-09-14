import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';
import {Label, Title} from 'components/atoms/Label';
import Input from 'components/atoms/Input/Default';
import Button from 'components/atoms/Button/Contained';
import TextButton from 'components/atoms/Button/Outline';

import {ButtonText, ButtonOutiline, ButtonOutilineText} from '../style';
const Index = ({navigation}) => {
  const goTo = name => {
    navigation.navigate(name);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
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

      <Input text="Informe o código enviado para seu email" />

      <Button onPress={() => goTo('RecoveryAccount02')}>
        Verificar código
      </Button>

      <TextButton onPress={() => goBack()}>Voltar</TextButton>
    </Container>
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
