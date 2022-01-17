import React from 'react';
import PropTypes from 'prop-types';

import {Image, StyleSheet} from 'react-native';

import {Container, StyledContainer} from 'components/atoms/Container';

import {Title, Description} from 'components/atoms/Label';

import Button from 'components/atoms/Button/Contained';

import Footer from 'components/molecules/FooterIntroLayoutApp';

const Index = ({
  navigation,
  img,
  title,
  description,
  messageButton,
  footer,
}) => {
  const goToRouter = name => {
    navigation.navigate(name);
  };

  return (
    <Container justify="center" align="center" padding={10}>
      <StyledContainer>
        <Image source={img} resizeMode="contain" style={style.img} />
      </StyledContainer>

      <StyledContainer align="center">
        <Title>{title}</Title>
        <StyledContainer
          align="center"
          justify="center"
          style={style.description}>
          <StyledContainer align="center" justify="center" width={80}>
            <Description>{description}</Description>
          </StyledContainer>
        </StyledContainer>
      </StyledContainer>

      <StyledContainer width={100}>
        <Button onPress={() => goToRouter('SignIn')}>`${messageButton}`</Button>
      </StyledContainer>

      {footer && <Footer goToNextRouter={goToRouter} />}
    </Container>
  );
};

const style = StyleSheet.create({
  img: {
    width: '100%',
    height: 230,
  },

  description: {
    marginTop: 6,
  },

  distance: {marginTop: 16},
});

Index.propTypes = {
  navigation: PropTypes.func.isRequired,
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  messageButton: PropTypes.string,
  footer: PropTypes.boolean,
};

Index.defaultProps = {
  navigation: () => {},
  img: '',
  title: '',
  description: '',
  messageButton: '',
  footer: false,
};

export default Index;
