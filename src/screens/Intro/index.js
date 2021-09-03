import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import Img0 from '../../assets/images/step0.png';
import Img1 from '../../assets/images/step1.png';
import Img2 from '../../assets/images/step2.png';

import ArrowRight from '../../assets/images/arrow-right.png';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  h1: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  h3: {
    color: '#6C6C80',
    fontSize: 16,
  },
});

const IntroSwiper = ({navigation}) => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      dotColor={'#34CB79'}
      activeDotColor={'#2a9159'}>
      <View style={styles.slide1}>
        <Image source={Img0} style={{width: 250, height: 250}} />
        <View style={{width: '80%'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: '#D8D8D8',
              marginTop: 12,
            }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </View>
      </View>
      <View style={styles.slide2}>
        <Image
          source={Img1}
          style={{width: 250, height: 250}}
          resizeMode={'contain'}
        />
        <View style={{width: '80%'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: '#D8D8D8',
              marginTop: 12,
            }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </View>
      </View>
      <View style={styles.slide3}>
        <Image
          source={Img2}
          style={{width: 300, height: 250}}
          resizeMode={'contain'}
        />
        <View style={{width: '80%'}}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: '#D8D8D8',
              marginTop: 12,
            }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            marginTop: 20,
            backgroundColor: '#2FB86E',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            padding: 16,
          }}
          onPress={() => {
            navigation.navigate('Information');
          }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Proximo
          </Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};

export default IntroSwiper;
