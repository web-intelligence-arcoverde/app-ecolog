import React from 'react';
import {Marker} from 'react-native-maps';

import {useDispatch} from 'react-redux';
import {SvgCss as SvgComponent} from 'react-native-svg';

import iconsTypes from '../../../constants/points-icons';

import {openCardPoint} from '../../../store/modules/point/actions';

const Index = ({point}) => {
  const dispatch = useDispatch();

  return (
    <Marker
      coordinate={{
        latitude: Number(point.latitude),
        longitude: Number(point.longitude),
      }}
      onPress={() => dispatch(openCardPoint(point))}>
      <SvgComponent
        width="38"
        height="38"
        xml={iconsTypes(point.type)}
        fill="#34cb79"
      />
    </Marker>
  );
};

export default Index;
