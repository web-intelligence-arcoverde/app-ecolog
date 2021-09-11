import React from 'react';

import {Container, StyledContainer} from 'components/atoms/Container';

import {Title, Description} from 'components/atoms/Label';

const Index = () => {
  return (
    <Container>
      <StyledContainer align="center">
        <Title>Seja consciente</Title>
      </StyledContainer>

      <StyledContainer align="center" justify="center">
        <StyledContainer align="center" justify="center" width={50}>
          <Description>
            Ajudar o meio ambiente, catadores e cooperativas cadastradas.
          </Description>
        </StyledContainer>
      </StyledContainer>
    </Container>
  );
};

export default Index;
