import React, {useEffect} from 'react';

import {COLORS} from '../../../constants/theme';
const API_KEY = 'AIzaSyBlI63zHzzdgiwU6O00ezQSsAfrJe-jWbs';

import MapViewDirections from 'react-native-maps-directions';

import {setDistanceForEnterprise} from '../../../store/modules/user/actions';
import {useDispatch, useSelector} from 'react-redux';

const Index = () => {
  const userLocation = useSelector(state => state.user.location);
  const enterprise = useSelector(state => state.enterprise.enterprise);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userLocation.latitude || !enterprise.longitude) {
      return;
    }

    let address = [`${userLocation.latitude},${userLocation.longitude}`];
    let dest = [`${enterprise.latitude},${enterprise.longitude}`];

    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${address}&destinations=${dest}&key=${API_KEY}`,
      )
        .then(res => res.json())
        .then(data => {
          dispatch(setDistanceForEnterprise(data.rows[0].elements[0]));
        });
    };
    getTravelTime();
  }, [
    dispatch,
    enterprise.latitude,
    enterprise.longitude,
    userLocation.latitude,
    userLocation.longitude,
  ]);

  return (
    <MapViewDirections
      origin={{
        latitude: Number(userLocation.latitude),
        longitude: Number(userLocation.longitude),
      }}
      destination={{
        latitude: enterprise.latitude,
        longitude: enterprise.longitude,
      }}
      strokeWidth={5}
      strokeColor={COLORS.green}
      apikey={API_KEY}
    />
  );
};

export default Index;
