import React from 'react';

import Swiper from 'react-native-swiper';

import Step01 from './Step01';
import Step02 from './Step02';
import Step03 from './Step03';

const IntroSwiper = ({navigation}) => {
  return (
    <Swiper
      loop={false}
      showsButtons={false}
      dotColor={'#34CB79'}
      activeDotColor={'#2a9159'}>
      <Step01 navigation={navigation} />
      <Step02 navigation={navigation} />
      <Step03 navigation={navigation} />
    </Swiper>
  );
};

export default IntroSwiper;
