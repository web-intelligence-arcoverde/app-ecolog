import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import Button from 'components/atoms/Button/Contained';

import HeartIcon from 'assets/icons/heart.svg';
import {SvgCss as SvgComponent} from 'react-native-svg';

const Index = () => {
  const {point} = useSelector(state => state.point);

  console.log(point);

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: '90%',
          paddingVertical: 20,
          paddingHorizontal: 20,
          borderRadius: 20,
          backgroundColor: '#fff',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 22, fontWeight: '800', color: '#2E2E2E'}}>
            {point.name}
          </Text>
          <SvgComponent
            SvgComponent
            width="18"
            height="18"
            xml={HeartIcon}
            fill="#34cb79"
          />
        </View>

        <Text style={{color: '#A4A4A4', marginTop: 4}}>
          Rua Jose Vicente Cardoso Filho, 2000
        </Text>

        <Text style={{color: '#A4A4A4', marginTop: 4}}>Arcoverde</Text>
        <View style={{marginTop: 8}} />
        <Button onPress={() => console.log('jm')}>Entrar</Button>
      </View>
    </View>
  );
};

export default Index;
