import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, KeyboardAvoidingView} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';
import {Label, Title} from 'components/atoms/Label';
import Input from 'components/atoms/Input/Default';
import Button from 'components/atoms/Button/Contained';

import Logo from 'assets/images/logo-background-information.png';
import MiniLogo from 'assets/images/mini-logo.png';

import {createUserRequest} from '../../../store/modules/user/actions';
import {useDispatch} from 'react-redux';

import HeaderButtonBackRoute from 'components/atoms/HeaderButtonBackRoute';

const Index = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {user} = route.params;

  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');

  const goTo = name => {
    navigation.navigate(name);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const createUser = () => {
    //dispatch(createUserRequest(newUser));
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <Container justify="center" align="center">
        <HeaderButtonBackRoute backToPreviusScreen={() => goBack()} />
        <StyledContainer direction="column" width={90}>
          <Title size={28} color="green">
            Escolha uma senha.
          </Title>

          <StyledContainer>
            <Label color="silver" size={16}>
              Certifique-se de que as senhas sejam iguais.
            </Label>
          </StyledContainer>

          <StyledContainer style={style.distance}>
            <Input
              text="Informe a sua senha"
              value={password}
              secureTextEntry={true}
              setValue={setPassword}
            />
          </StyledContainer>

          <StyledContainer style={style.distance}>
            <Input
              text="Confirmacao de senha"
              value={confirmationPassword}
              secureTextEntry={true}
              setValue={setConfirmationPassword}
            />
          </StyledContainer>

          <Button
            onPress={() => goTo('Dashboard')}
            disabled={true}
            background="silver">
            Finalizar
          </Button>
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
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  distance: {
    marginTop: 22,
  },
});

export default Index;
