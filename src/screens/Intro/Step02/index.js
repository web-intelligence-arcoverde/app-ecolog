import React from 'react';

import {Container, StyledContainer} from 'components/atoms/Container';

import {Title, Description} from 'components/atoms/Label';

const Index = () => {
  return (
    <Container>
      <StyledContainer align="center">
        <Title>È fácil</Title>
      </StyledContainer>

      <StyledContainer align="center" justify="center">
        <StyledContainer align="center" justify="center" width={50}>
          <Description>
            encontre coletores de recicláveis ​​ou pontos de coleta mais
            próximos de sua casa
          </Description>
        </StyledContainer>
      </StyledContainer>
    </Container>
  );
};

export default Index;
