import React, {useEffect, useState} from 'react';
import {StyleSheet, Image} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';
import {Label, Title} from 'components/atoms/Label';
import Input from 'components/atoms/Input/Default';
import MaskedInput from 'components/atoms/Input/Masked';

import Button from 'components/atoms/Button/Contained';
import TextButton from 'components/atoms/Button/Outline';

import Logo from 'assets/images/logo-background-information.png';
import MiniLogo from 'assets/images/mini-logo.png';

import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {messages} from '../../../validations/message';
import * as yup from 'yup';

const schema = yup
  .object({
    cpf: yup.string().required(messages.required),
    name: yup.string().required(messages.required),
    email: yup.string().email(messages.email).required(messages.required),
  })
  .required();

const Index = ({navigation, route}) => {
  const {type} = route.params;

  const {setValue, handleSubmit, errors, register} = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      cpf: '',
      name: '',
      email: '',
    },
  });

  const goTo = data => {
    console.log('aqui');
  };

  useEffect(() => {
    register('cpf');
    register('name');
    register('email');
  }, [register]);

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container justify="center" align="center">
      <Image source={Logo} style={{position: 'absolute', top: -170, left: 0}} />
      <StyledContainer direction="column" width={90}>
        <StyledContainer>
          <Title size={32} color="green">
            Insira as informações
          </Title>
        </StyledContainer>
        <StyledContainer style={{marginTop: 12}}>
          <Label color="silver" size={16}>
            Insira as informações
          </Label>
        </StyledContainer>

        <StyledContainer style={style.distance}>
          <MaskedInput
            text="CPF/CNPJ"
            onChangeText={text => setValue('cpf', text)}
            error={errors?.cpf}
            type="cpf"
          />
        </StyledContainer>

        <StyledContainer style={style.distance}>
          <Input
            style={{marginTop: 10}}
            text={type !== 'enterprise' ? 'Nome' : 'Nome da empresa'}
            onChangeText={text => setValue('name', text)}
            error={errors?.name}
          />
        </StyledContainer>

        <StyledContainer style={style.distance}>
          <Input
            text="Informe seu email"
            onChangeText={text => setValue('email', text)}
            error={errors?.email}
          />
        </StyledContainer>

        <StyledContainer>
          <Button onPress={handleSubmit(goTo)}>Prosseguir</Button>
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
