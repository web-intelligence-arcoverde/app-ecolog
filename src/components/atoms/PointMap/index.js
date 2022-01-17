import React from 'react';

import {Marker} from 'react-native-maps';
import {Image} from 'react-native';

import {useDispatch} from 'react-redux';
import {readEnterprise} from '../../../store/modules/enterprise/actions';
import Logo from '../../../assets/images/logo-sem-nome.png';

const Index = ({point}) => {
  const dispatch = useDispatch();

  return (
    <Marker
      onPress={() => {
        dispatch(readEnterprise(point));
      }}
      coordinate={{
        latitude: Number(point.latitude),
        longitude: Number(point.longitude),
      }}>
      <Image source={Logo} style={{height: 22, width: 22}} />
    </Marker>
  );
};

export default Index;
