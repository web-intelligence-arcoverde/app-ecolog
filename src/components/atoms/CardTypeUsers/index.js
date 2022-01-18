import React, {useState} from 'react';

import {Image, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../../constants/theme';

import {StyledContainer} from 'components/atoms/Container';
import {Label, Title} from 'components/atoms/Label';

import {Container} from './style';

const Index = ({image, type, description, selected, onPress}) => {
  return (
    <Container selected={selected}>
      <TouchableOpacity
        onPress={() => onPress()}
        style={{
          height: 100,
          borderRadius: 8,
          width: '100%',
          backgroundColor: '#f6f6f6',
          flexDirection: 'row',
          borderColor: `${COLORS.silver}`,
          borderWidth: 1,
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
          <Label size={18} weight="bold">
            {type}
          </Label>
          <Label>{description}</Label>
        </StyledContainer>
      </TouchableOpacity>
    </Container>
  );
};

Index.defaultProps = {
  selected: false,
};

export default Index;
