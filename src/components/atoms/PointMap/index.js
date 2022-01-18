import React from 'react';

import {Marker} from 'react-native-maps';
import {Image} from 'react-native';

import {useDispatch} from 'react-redux';
import {readEnterprise} from '../../../store/modules/enterprise/actions';

import Person from 'assets/images/person.png';
import RecyclePoint from 'assets/images/recycling-bin.png';
import Car from 'assets/images/garbage-truck.png';
import Enterprise from 'assets/images/recycling-center.png';

const ImagesTypes = {
  person: Person,
  point: RecyclePoint,
  car: Car,
  enterprise: Enterprise,
};

const Index = ({point}) => {
  const dispatch = useDispatch();

  return (
    <Marker
      coordinate={{
        latitude: Number(point.latitude),
        longitude: Number(point.longitude),
      }}>
      <Image source={ImagesTypes[point.type]} style={{height: 22, width: 22}} />
    </Marker>
  );
};

export default Index;
