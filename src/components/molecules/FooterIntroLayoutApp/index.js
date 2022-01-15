import React from 'react';

import {StyleSheet} from 'react-native';

import {Label} from 'components/atoms/Label';
import {StyledContainer} from 'components/atoms/Container';
import TextButton from 'components/atoms/Button/Text';

const Index = ({goToNextRouter}) => {
  return (
    <StyledContainer direction="row" justify="center" style={style.distance}>
      <Label color="silver" style={style.spaceLabels}>
        Novo por aqui?
      </Label>
      <TextButton
        color="green"
        weight="bold"
        onPress={() => goToNextRouter('SignUp')}>
        Registre-se!
      </TextButton>
    </StyledContainer>
  );
};

const style = StyleSheet.create({
  spaceLabels: {
    marginRight: 4,
  },
  distance: {marginTop: 16},
});

export default Index;
