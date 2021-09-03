import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import BackgroundImageLogo from '../../assets/images/logo-background-information.png';

const Index = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={BackgroundImageLogo}
        style={{position: 'absolute', top: 0, left: 0}}
      />
      <View style={{width: '100%'}}>
        <View style={{width: 248}}>
          <Text
            style={{
              color: '#322153',
              fontSize: 30,
              fontWeight: 'bold',
              lineHeight: 40,
            }}>
            Seu marketplace de coleta de resíduos.
          </Text>
          <Text
            style={{
              marginTop: 14,
              color: '#6C6C80',
              fontSize: 16,
              lineHeight: 26,
            }}>
            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
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
            navigation.navigate('SignIn');
          }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 30,
  },
});

export default Index;
