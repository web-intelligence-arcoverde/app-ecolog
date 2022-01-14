import React from 'react';

import People from 'assets/images/people-recycle.png';
import LayoutIntroApp from 'components/organisms/LayoutIntroApp';

const Index = ({navigation}) => (
  <LayoutIntroApp
    navigation={navigation}
    img={People}
    title="Ajude o meio ambiente"
    description="Incentive seus amigos e vizinhos a descartar o lixo corretamente."
    messageButton="Pular"
    footer
  />
);

export default Index;
