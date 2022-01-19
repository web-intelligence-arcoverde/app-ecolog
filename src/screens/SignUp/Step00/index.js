import React from 'react';

import {Image, View} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';
import {Title, Description} from 'components/atoms/Label';
import CardTypeUsers from 'components/atoms/CardTypeUsers';
import HeaderButtonBackRoute from 'components/atoms/HeaderButtonBackRoute';

import User from 'assets/images/user-select-type.png';
import Enteprise from 'assets/images/garbage-car-enterprise.png';
import Collect from 'assets/images/garbageman.png';
import MiniLogo from 'assets/images/mini-logo.png';

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
    <Container padding={14} justify="center">
      <HeaderButtonBackRoute backToPreviusScreen={() => goBack()} />

      <StyledContainer>
        <StyledContainer style={{marginBottom: 22}}>
          <Title size={26} color="green">
            Selectione o tipo de usuário.
          </Title>
          <Description align="left" size={14}>
            Clique no seu tipo de usuario para dar continuidade ao seu
            cadastramento.
          </Description>
        </StyledContainer>

        <StyledContainer>
          <CardTypeUsers
            image={User}
            onPress={() => goTo('Morador')}
            type="Morador"
            description="Ver pontos de coleta proximos a sua casa e marca entregas de produtos
          reciclaveis."
          />

          <View style={{marginBottom: 16}} />

          <CardTypeUsers
            image={Enteprise}
            type="Empresa"
            onPress={() => goTo('Empresa')}
            description="Ver pontos de coleta proximos a sua casa e marca entregas de produtos
          reciclaveis."
          />

          <View style={{marginBottom: 16}} />

          <CardTypeUsers
            image={Collect}
            onPress={() => goTo('Catador')}
            type="Catador de reciclagem"
            description="Ver pontos de coleta proximos a sua casa e marca entregas de produtos
          reciclaveis."
          />
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

export default Index;
