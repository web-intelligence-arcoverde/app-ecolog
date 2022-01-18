import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';
import {Label, Title} from 'components/atoms/Label';

import TextButton from 'components/atoms/Button/Contained';
import CardTypeUsers from 'components/atoms/CardTypeUsers';

import MiniLogo from 'assets/images/mini-logo.png';

import User from 'assets/images/user-select-type.png';
import Enteprise from 'assets/images/garbage-car-enterprise.png';
import Collect from 'assets/images/garbageman.png';

import {COLORS} from '../../../constants/theme';

const Index = ({navigation}) => {
  const [userTypeSelected, setUserTypeSelected] = useState(false);
  const [userType, setUserType] = useState('');

  const goTo = type => {
    navigation.navigate('SignUp01', {
      type,
    });
  };

  const goBack = () => {
    navigation.goBack();
  };

  console.log(userType);

  return (
    <Container align="center" justify="center" padding={10}>
      <StyledContainer>
        <StyledContainer>
          <Title size={26} color="green">
            Selectione o tipo de usuário.
          </Title>
        </StyledContainer>

        <StyledContainer style={{marginTop: 16}}>
          <CardTypeUsers
            image={User}
            onPress={() => setUserType('Morador')}
            type="Morador"
            description="Ver pontos de coleta proximos a sua casa e marca entregas de produtos
          reciclaveis."
            selected={userType === 'Morador' ? true : false}
          />

          <CardTypeUsers
            image={Enteprise}
            type="Empresa"
            onPress={() => setUserType('Empresa')}
            description="Ver pontos de coleta proximos a sua casa e marca entregas de produtos
          reciclaveis."
            selected={userType === 'Empresa' ? true : false}
          />

          <CardTypeUsers
            image={Collect}
            onPress={() => setUserType('Catador')}
            type="Catador de reciclagem"
            description="Ver pontos de coleta proximos a sua casa e marca entregas de produtos
          reciclaveis."
            selected={userType === 'Catador' ? true : false}
          />
        </StyledContainer>

        <StyledContainer>
          <TextButton color="green" weight="bold" onPress={() => goBack()}>
            Avançar
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

export default Index;
