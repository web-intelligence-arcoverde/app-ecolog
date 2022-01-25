import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

const Loading = ({animation, speed}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Lottie source={animation} speed={speed} autoPlay />
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
