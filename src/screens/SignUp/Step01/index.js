import React, {useEffect, useState} from 'react';
import {StyleSheet, Image} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';
import {Label, Title} from 'components/atoms/Label';
import Input from 'components/atoms/Input/Default';
import Button from 'components/atoms/Button/Contained';
import TextButton from 'components/atoms/Button/Outline';

import Logo from 'assets/images/logo-background-information.png';
import MiniLogo from 'assets/images/mini-logo.png';

const Index = ({navigation, route}) => {
  const [validate, setValidate] = useState(false);
  const [cpf, setCpf] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const {type} = route.params;

  const goTo = name => {
    const user = {cpf, fullName, email, type};

    navigation.navigate(name, {
      user,
    });
  };

  useEffect(() => {
    if ((cpf.length && fullName.length && email.length && type.length) > 0) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  }, [cpf, fullName, email, type]);

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
          <Input text="CNPJ" value={cpf} setValue={setCpf} />
        </StyledContainer>

        <StyledContainer style={style.distance}>
          <Input
            text="Nome da empresa"
            value={fullName}
            setValue={setFullName}
          />
        </StyledContainer>

        <StyledContainer style={style.distance}>
          <Input text="Informe seu email" value={email} setValue={setEmail} />
        </StyledContainer>

        <StyledContainer>
          <Button
            onPress={() => goTo('SignUp02')}
            disabled={!validate}
            background={!validate && 'silver'}>
            Prosseguir
          </Button>
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
