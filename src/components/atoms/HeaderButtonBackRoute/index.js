import React from 'react';

import {TouchableOpacity, Image} from 'react-native';
import {SvgCss} from 'react-native-svg';
import svgIcon from 'assets/icons/arrow_back.svg';

import Logo from 'assets/images/logo-background-information.png';

const Index = ({backToPreviusScreen}) => {
  return (
    <>
      <Image source={Logo} style={{position: 'absolute', top: -160, left: 0}} />

      <TouchableOpacity
        onPress={() => backToPreviusScreen()}
        style={{position: 'absolute', top: 16, left: 14}}>
        <SvgCss width="28" height="28" xml={svgIcon} fill="#34cb79" />
      </TouchableOpacity>
    </>
  );
};

export default Index;
