import React, {useEffect} from 'react';
import {Text, StyleSheet, Image} from 'react-native';

import Button from 'components/atoms/Button/Contained';
import Input from 'components/atoms/Input/Default';
import {Container, StyledContainer} from 'components/atoms/Container';
import Logo from 'assets/images/mini-logo.png';

import MainLogo from 'assets/images/logo-sem-nome.png';

import {Description} from 'components/atoms/Label';

import {readSignInRequest} from '../../store/modules/auth/actions';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import {messages} from '../../validations/message';
import {COLORS} from '../../constants';

import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().email(messages.email).required(messages.required),
    password: yup
      .string()
      .min(6, messages.min6)
      .max(20, messages.max20)
      .required(messages.required),
  })
  .required();

const Index = ({navigation}) => {
  const dispatch = useDispatch();

  const {setValue, handleSubmit, errors, register} = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  const goTo = name => {
    navigation.navigate(name);
  };

  const signInRequest = data => dispatch(readSignInRequest({data, navigation}));

  return (
    <Container align="center" behavior="padding">
      <StyledContainer
        width={90}
        style={{
          marginTop: 26,
        }}>
        <StyledContainer justify="center" align="center">
          <Image source={MainLogo} />
          <Text style={styles.text}>Ecolog</Text>
          <StyledContainer
            align="center"
            justify="center"
            style={{
              marginTop: 8,
            }}>
            <Description>
              Seu marketplace de coleta de resíduos, ajudamos pessoas a
              encontrarem pontos de coleta de forma eficiente.
            </Description>
          </StyledContainer>
        </StyledContainer>

        <StyledContainer
          style={{
            marginTop: 42,
          }}>
          <Input
            text="Email"
            onChangeText={text => setValue('email', text)}
            error={errors?.email}
          />
        </StyledContainer>

        <StyledContainer
          style={{
            marginTop: 18,
          }}>
          <Input
            text="Password"
            secureTextEntry={true}
            onChangeText={text => setValue('password', text)}
            error={errors?.password}
          />
        </StyledContainer>

        <StyledContainer
          align="flex-end"
          style={{
            marginTop: 14,
          }}>
          <Text style={styles.recovery} onPress={() => goTo('RecoveryAccount')}>
            Esqueceu sua senha?
          </Text>
        </StyledContainer>

        <Button onPress={handleSubmit(signInRequest)}>Entrar</Button>
      </StyledContainer>

      <StyledContainer
        direction="row"
        justify="center"
        style={{
          marginTop: 20,
          elevation: 1,
        }}>
        <Text style={styles.text1}>Novo por aqui?</Text>
        <Text style={styles.text2} onPress={() => goTo('SignUp')}>
          Registre-se!
        </Text>
      </StyledContainer>
      <StyledContainer
        align="center"
        style={{
          position: 'absolute',
          bottom: 10,
        }}>
        <Image source={Logo} />
      </StyledContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    marginTop: 8,
    color: '#34CB79',
    fontWeight: 'bold',
    fontSize: 42,
  },
  card: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    backgroundColor: '#0000',
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
    color: `${COLORS.silver}`,
    fontWeight: 'bold',
  },
});

export default Index;
