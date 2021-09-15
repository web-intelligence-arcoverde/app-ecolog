import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

import {ButtonOutiline, ButtonOutilineText} from './style';

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
    <Container>
      <View
        style={{
          justifyContent: 'center',
          paddingBottom: 40,
        }}>
        <View
          style={{
            marginTop: 60,
            flexDirection: 'column',
            paddingLeft: 20,
            paddingRight: 20,
          }}>
          <Text style={styles.text}>Criar conta</Text>

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
            placeholder="Nome"
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
            placeholder="Email"
            placeholderTextColor="#6C6C80"
            returnKeyType="go"
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
              height: 56,
              marginTop: 30,
              backgroundColor: '#f0f0f5',
              borderRadius: 8,
              justifyContent: 'center',
            }}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              style={{
                height: 42,
                color: '#6C6C80',
              }}>
              <Picker.Item label="Coletor" value="coletor" />
              <Picker.Item label="Empresa" value="empresa" />
            </Picker>
          </View>

          {selectedLanguage === 'empresa' ? (
            <>
              <Input
                style={{
                  marginTop: 30,
                  fontSize: 14,
                  paddingLeft: 15,
                }}
                placeholder="Nome da empresa"
                placeholderTextColor="#6C6C80"
              />

              <Input
                style={{
                  marginTop: 30,
                  fontSize: 14,
                  paddingLeft: 15,
                }}
                placeholder="CNPJ"
                placeholderTextColor="#6C6C80"
              />
            </>
          ) : (
            <></>
          )}

          <Button>Criar</Button>

          <TextButton onPress={() => goBack()}>Voltar</TextButton>
        </View>
      </View>

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
