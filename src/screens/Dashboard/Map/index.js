import React, {useEffect, useRef} from 'react';

import MapView, {Marker} from 'react-native-maps';

import {Dimensions} from 'react-native';

import Logo from '../../../assets/images/logo-sem-nome.png';

import MapViewDirections from 'react-native-maps-directions';

const API_KEY = 'AIzaSyCUm61V9HWJ-gH4GPIVQ-PjySkLnUmo1X4';

import {readEnterprise} from '../../../store/modules/enterprise/actions';
import {readCompaniesRequest} from '../../../store/modules/companies/actions';

import Geolocation from '@react-native-community/geolocation';

const {height, width} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.05; //Very high zoom level
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

import {useDispatch, useSelector} from 'react-redux';
import {setUserLocation} from '../../../store/modules/user/actions';

const data = [
  {
    enterprise: 'Casa',
    latitude: -8.41789,
    longitude: -37.034227,
  },
  {
    enterprise: 'EREMA',
    latitude: -8.41719,
    longitude: -37.03838,
  },
  {
    enterprise: 'Lions',
    latitude: 8.416129,
    longitude: -37.03647,
  },
  {
    enterprise: 'Esporte',
    latitude: -8.418841,
    longitude: -37.044705,
  },
  {
    enterprise: 'Centro',
    latitude: -8.419551,
    longitude: -37.055889,
  },
];

const Index = ({onChangeCard}) => {
  const mapView = useRef();

  const dispatch = useDispatch();

  useEffect(() => {
    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      dispatch(
        setUserLocation({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }),
      );
    }).catch(err => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    dispatch(readCompaniesRequest());
  }, []);

  const userLocation = useSelector(state => state.user.location);

  const enterprise = useSelector(state => state.enterprise.enterprise);

  const companies = useSelector(state => state.companies.companies);

  console.log(companies);

  const selectEnterprise = item => {
    dispatch(readEnterprise(item));
  };

  useEffect(() => {
    if (!userLocation.latitude || !enterprise.longitude) {
      return;
    }

    let address = [`${userLocation.latitude},${userLocation.longitude}`];
    let dest = [`${enterprise.latitude},${enterprise.longitude}`];

    const getTravelTime = async () => {
      fetch(
        `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${address}&destinations=${dest}&key=${API_KEY}`,
      )
        .then(res => res.json())
        .then(data => {
          console.log(data.rows[0].elements[0]);
        });
    };
    getTravelTime();
  }, [
    enterprise.latitude,
    enterprise.longitude,
    userLocation.latitude,
    userLocation.longitude,
  ]);

  return (
    <MapView
      ref={mapView}
      style={{flex: 1}}
      showsUserLocation={true}
      initialRegion={{
        latitude: -8.41955,
        longitude: -37.0652,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}>
      {data.map((dev, index) => (
        <Marker
          onPress={() => {
            selectEnterprise(dev);
          }}
          key={index}
          image={Logo}
          coordinate={{
            latitude: Number(dev.latitude),
            longitude: Number(dev.longitude),
          }}
        />
      ))}
      {enterprise.longitude && (
        <MapViewDirections
          origin={{
            latitude: Number(userLocation.latitude),
            longitude: Number(userLocation.longitude),
          }}
          strokeWidth={3}
          strokeColor="#2FB86E"
          destination={{
            latitude: Number(enterprise.latitude),
            longitude: Number(enterprise.longitude),
          }}
          apikey={API_KEY}
        />
      )}
    </MapView>
  );
};

export default Index;
