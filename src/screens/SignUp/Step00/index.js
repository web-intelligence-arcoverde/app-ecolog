import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';
import {Label, Title} from 'components/atoms/Label';

import TextButton from 'components/atoms/Button/Outline';

import MiniLogo from 'assets/images/mini-logo.png';

import User from 'assets/images/user-select-type.png';
import Enteprise from 'assets/images/garbage-car-enterprise.png';
import Collect from 'assets/images/garbageman.png';

const Index = ({navigation}) => {
  const goTo = type => {
    navigation.navigate('SignUp01', {
      type,
    });
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container align="center" justify="center">
      <StyledContainer width={90}>
        <StyledContainer width={80} style={{marginTop: 32}}>
          <Title color="green" size={28}>
            Selectione o tipo de usuário.
          </Title>
        </StyledContainer>

        <StyledContainer style={{marginTop: 22}}>
          <CardTypeUser
            onPress={() => goTo('user')}
            image={User}
            type="Usuário"
            description="Ver pontos de coleta proximos a sua casa e marca entregas de produtos
          reciclaveis."
          />

          <CardTypeUser
            onPress={() => goTo('enterprise')}
            image={Enteprise}
            type="Empresa"
            description="Ver pontos de coleta proximos a sua casa e marca entregas de produtos
          reciclaveis."
          />

          <CardTypeUser
            onPress={() => goTo('collector')}
            image={Collect}
            type="Catador de reciclagem"
            description="Ver pontos de coleta proximos a sua casa e marca entregas de produtos
          reciclaveis."
          />
        </StyledContainer>

        <StyledContainer style={{marginTop: 20}}>
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

const CardTypeUser = ({image, type, description, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        height: 100,
        marginTop: 20,
        borderRadius: 8,
        width: '100%',
        backgroundColor: '#f6f6f6',
        flexDirection: 'row',
      }}>
      <StyledContainer width={40}>
        <Image
          source={image}
          resizeMode="contain"
          style={{
            height: 90,
            width: 130,
          }}
        />
      </StyledContainer>
      <StyledContainer width={60} justify="center">
        <Label color="green" size={18} weight="bold">
          {type}
        </Label>
        <Label>{description}</Label>
      </StyledContainer>
    </TouchableOpacity>
  );
};

export default Index;
