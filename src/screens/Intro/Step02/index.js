import React from 'react';

import LayoutIntroApp from 'components/organisms/LayoutIntroApp';
import Car from 'assets/images/garbage-car.png';

const Index = ({navigation}) => (
  <LayoutIntroApp
    navigation={navigation}
    img={Car}
    title="É fácil"
    description="encontre coletores de recicláveis ​​ou pontos de coleta mais
      próximos de sua casa"
    messageButton="Registre-se"
    footer
  />
);

export default Index;
