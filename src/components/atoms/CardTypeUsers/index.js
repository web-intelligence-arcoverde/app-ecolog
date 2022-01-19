import React from 'react';

import {Image, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../../constants/theme';

import {StyledContainer} from 'components/atoms/Container';
import {Label} from 'components/atoms/Label';

import {Container} from './style';

import ArrowRight from 'assets/images/arrow-right-only-arrow.png';

const Index = ({image, type, description, onPress}) => {
  return (
    <Container onPress={() => onPress()}>
      <Image
        source={image}
        resizeMode="contain"
        style={{
          height: 80,
          width: 110,
        }}
      />

      <StyledContainer width={60} justify="center">
        <Label size={18} weight="bold">
          {type}
        </Label>
        <Label>{description}</Label>
      </StyledContainer>

      <Image source={ArrowRight} />
    </Container>
  );
};

Index.defaultProps = {
  selected: false,
};

/*

 

      */

export default Index;
