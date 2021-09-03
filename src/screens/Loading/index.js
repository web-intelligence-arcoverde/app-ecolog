import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Animated, Easing} from 'react-native';

import Logo from '../../assets/images/logo-sem-nome.png';

import {Image, ContainerImage} from './style';

/*

  - Colocar animação na logo


*/

const Loading = ({navigation}) => {
  const redirect = () => {
    setTimeout(function () {
      navigation.navigate('Intro');
    }, 5000);
  };

  const [rotateValue, setRotateValue] = useState(new Animated.Value(0));
  useEffect(() => {
    StartImageRotate();
  }, []);

  function StartImageRotate() {
    rotateValue.setValue(0);

    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => StartImageRotate());
  }

  const RotateData = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      {redirect()}
      <Animated.Image
        style={{
          transform: [{rotate: RotateData}],
        }}
        source={Logo}
      />
    </View>
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
