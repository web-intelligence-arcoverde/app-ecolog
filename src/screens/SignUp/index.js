import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import {Picker} from '@react-native-picker/picker';

import {Container, StyledContainer} from 'components/atoms/Container';
import {Label, Title} from 'components/atoms/Label';
import Input from 'components/atoms/Input/Default';
import Button from 'components/atoms/Button/Contained';
import TextButton from 'components/atoms/Button/Outline';

import MiniLogo from 'assets/images/mini-logo.png';

const Index = ({navigation}) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tipoConta, setTipoConta] = useState('empresa');
  const [selectedLanguage, setSelectedLanguage] = useState();

  const goTo = name => {
    navigation.navigate(name);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container justify="center" align="center">
      <StyledContainer width={90}>
        <View
          style={{
            height: 56,
            marginTop: 80,
            borderRadius: 8,
            justifyContent: 'center',
            width: '100%',
            backgroundColor: '#f6f6f6',
          }}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
            style={{
              height: 42,
            }}>
            <Picker.Item label="Coletor" value="coletor" />
            <Picker.Item label="Empresa" value="empresa" />
          </Picker>
        </View>
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
