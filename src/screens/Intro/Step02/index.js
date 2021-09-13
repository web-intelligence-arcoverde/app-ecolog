import React from 'react';

import {Image, StyleSheet, Text} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';

import {Title, Description} from 'components/atoms/Label';

import People from 'assets/images/garbage-car.png';

import {COLORS} from '../../../constants';
import TextButton from 'components/atoms/Button/Contained';

const Index = ({navigation}) => {
  const goTo = name => {
    navigation.navigate(name);
  };

  return (
    <Container justify="center" align="center">
      <StyledContainer>
        <Image
          source={People}
          resizeMode="contain"
          style={{width: '100%', height: 300}}
        />
      </StyledContainer>

      <StyledContainer align="center">
        <Title>É fácil</Title>
      </StyledContainer>

      <StyledContainer align="center" justify="center">
        <StyledContainer
          align="center"
          justify="center"
          width={60}
          style={{marginTop: 10}}>
          <Description>
            encontre coletores de recicláveis ​​ou pontos de coleta mais
            próximos de sua casa
          </Description>
        </StyledContainer>
      </StyledContainer>

      <StyledContainer width={90}>
        <TextButton>Pular</TextButton>
      </StyledContainer>

      <StyledContainer direction="row" justify="center" style={{marginTop: 18}}>
        <Text style={styles.text1}>Novo por aqui?</Text>
        <Text style={styles.text2} onPress={() => goTo('SignUp')}>
          Registre-se!
        </Text>
      </StyledContainer>
    </Container>
  );
};

const styles = StyleSheet.create({
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
