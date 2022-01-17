import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

import {Dimensions} from 'react-native';

import RecycleAnimation from '../../assets/animations/recycle.json';

import {useDispatch} from 'react-redux';
import {setUserLocation} from '../../store/modules/user/actions';
import Geolocation from '@react-native-community/geolocation';

const {height, width} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.05; //Very high zoom level
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Loading = ({navigation}) => {
  const dispatch = useDispatch();

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

  return (
    <SafeAreaView style={styles.container}>
      <Lottie
        source={RecycleAnimation}
        speed={0.09}
        autoPlay
        loop={false}
        onAnimationFinish={() => navigation.navigate('Intro')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Loading;
