import React, {useEffect, useRef, useState} from 'react';

import MapView, {Marker} from 'react-native-maps';

import {Dimensions} from 'react-native';

import Logo from '../../../assets/images/logo-sem-nome.png';

import MapViewDirections from 'react-native-maps-directions';

import LoadingMap from '../../LoadingMap';

const API_KEY = 'AIzaSyBlI63zHzzdgiwU6O00ezQSsAfrJe-jWbs';

import {readEnterprise} from '../../../store/modules/enterprise/actions';
import {readCompaniesRequest} from '../../../store/modules/companies/actions';
import {setDistanceForEnterprise} from '../../../store/modules/user/actions';

import Geolocation from '@react-native-community/geolocation';

import {Image} from 'react-native';

const {height, width} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.05; //Very high zoom level
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

import {useDispatch, useSelector} from 'react-redux';
import {setUserLocation} from '../../../store/modules/user/actions';

import {COLORS} from '../../../constants/theme';

const data = [
  {
    enterprise: 'Casa',
    tags: [{text: 'Plásticos'}, {text: 'ALUMÍNIO'}, {text: 'METAIS'}],
    latitude: -8.41789,
    longitude: -37.034227,
  },
  {
    enterprise: 'EREMA',
    tags: [{text: 'Plásticos'}, {text: 'Aluminio'}, {text: 'Metais'}],
    latitude: -8.41719,
    longitude: -37.03838,
  },
  {
    enterprise: 'Lions',
    tags: [{text: 'Plásticos'}, {text: 'Papel'}, {text: 'Metais'}],
    latitude: 8.416129,
    longitude: -37.03647,
  },
  {
    enterprise: 'Esporte',
    tags: [{text: 'Plásticos'}, {text: 'Aluminio'}, {text: 'Papel'}],
    latitude: -8.418841,
    longitude: -37.044705,
  },
  {
    enterprise: 'Centro',
    tags: [{text: 'Plásticos'}, {text: 'Aluminio'}, {text: 'Papel'}],
    latitude: -8.419551,
    longitude: -37.055889,
  },
];

const Index = () => {
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
      setLoading(false);
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

  const [loading, setLoading] = useState(true);

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

  const DESTINATION = {
    latitude: -8.418841,
    longitude: -37.055889,
  };

  if (loading) {
    return <LoadingMap />;
  }

  console.log(enterprise.latitude);

  return (
    <MapView
      ref={mapView}
      style={{flex: 1}}
      showsUserLocation={true}
      initialRegion={userLocation}>
      {data.map((dev, index) => (
        <Marker
          onPress={() => {
            selectEnterprise(dev);
          }}
          key={index}
          coordinate={{
            latitude: Number(dev.latitude),
            longitude: Number(dev.longitude),
          }}>
          <Image source={Logo} style={{height: 22, width: 22}} />
        </Marker>
      ))}

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
    </MapView>
  );
};

export default Index;
