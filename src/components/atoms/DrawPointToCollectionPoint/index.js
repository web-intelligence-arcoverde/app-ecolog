import React, {useEffect} from 'react';

import {COLORS} from '../../../constants/theme';
const API_KEY = 'AIzaSyD1oVj3i4gc9ku_H4pHLHI_PbxO9rorCSk';

import MapViewDirections from 'react-native-maps-directions';

import {useDispatch, useSelector} from 'react-redux';

const Index = () => {
  const userLocation = useSelector(state => state.user.location);
  const point = useSelector(state => state.point.point);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!point.latitude || !point.longitude) {
      return;
    }

    let address = [`${userLocation.latitude},${userLocation.longitude}`];
    let dest = [`${point.latitude},${point.longitude}`];

    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${address}&destinations=${dest}&key=${API_KEY}`,
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    };
    getTravelTime();
  }, [point]);

  return (
    <MapViewDirections
      origin={{
        latitude: Number(userLocation.latitude),
        longitude: Number(userLocation.longitude),
      }}
      destination={{
        latitude: Number(point.latitude),
        longitude: Number(point.longitude),
      }}
      strokeWidth={5}
      strokeColor={COLORS.green}
      apikey={API_KEY}
    />
  );
};

export default Index;
