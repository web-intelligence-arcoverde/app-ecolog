import React from 'react';

import {Container, StyledContainer} from 'components/atoms/Container';

import {Title, Description} from 'components/atoms/Label';

const Index = () => {
  return (
    <Container>
      <StyledContainer align="center">
        <Title>Ajude o meio ambiente</Title>
      </StyledContainer>

      <StyledContainer align="center" justify="center">
        <StyledContainer align="center" justify="center" width={50}>
          <Description>
            Incentive seus amigos e vizinhos a descartar o lixo corretamente.
          </Description>
        </StyledContainer>
      </StyledContainer>
    </Container>
  );
};

export default Index;
