import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

import RecycleAnimation from '../../assets/animations/recycle.json';

const Loading = ({navigation}) => {
  const redirect = () => {
    setTimeout(function () {
      navigation.navigate('Intro');
    }, 4000);
  };

  return (
    <SafeAreaView style={styles.container}>
      {redirect()}
      <Lottie source={RecycleAnimation} speed={0.09} autoPlay />
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
