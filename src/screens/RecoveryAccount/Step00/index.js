import React from 'react';
import {StyleSheet, Image} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';
import {Label, Title} from 'components/atoms/Label';
import Input from 'components/atoms/Input/Default';
import Button from 'components/atoms/Button/Contained';
import TextButton from 'components/atoms/Button/Outline';

const Index = ({navigation}) => {
  const goTo = name => {
    navigation.navigate(name);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container justify="center" align="center">
      <StyledContainer direction="column" width={90}>
        <StyledContainer>
          <Title size={28} color="green">
            Recuperar conta
          </Title>
        </StyledContainer>
        <StyledContainer>
          <Label color="silver">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Label>
        </StyledContainer>

        <StyledContainer style={style.distance}>
          <Input text="Informe seu email" />
        </StyledContainer>

        <StyledContainer>
          <Button onPress={() => goTo('RecoveryAccount01')}>
            Enviar código
          </Button>
        </StyledContainer>

        <StyledContainer style={style.distance}>
          <TextButton color="green" onPress={() => goBack()}>
            Voltar
          </TextButton>
        </StyledContainer>
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
