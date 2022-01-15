import React from 'react';

import LayoutIntroApp from 'components/organisms/LayoutIntroApp';
import Planet from 'assets/images/save-the-planet.png';

const Index = ({navigation}) => (
  <LayoutIntroApp
    navigation={navigation}
    img={Planet}
    title="Seja consciente"
    description="Ajudar o meio ambiente, catadores e cooperativas cadastradas."
    messageButton="Vamos lá"
  />
);

export default Index;
