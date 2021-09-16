import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

import RecycleAnimation from '../../assets/animations/loading-map.json';

const Loading = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Lottie source={RecycleAnimation} speed={0.6} autoPlay />
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
