import React from 'react';
import {useRef} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';

import {COLORS} from '../../../constants/theme';

const Index = () => {
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '100%',
            paddingVertical: 16,
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            backgroundColor: '#fff',
          }}>
          <TouchableOpacity
            onPress={() => onOpen()}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: `${COLORS.green}`,
              }}>
              Escolha uma categoria
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modalize
        ref={modalizeRef}
        snapPoint={160}
        modalHeight={260}
        HeaderComponent={
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: `${COLORS.green}`,
              }}>
              Escolha a categoria
            </Text>
          </View>
        }
        modalStyle={{borderTopRightRadius: 40, borderTopLeftRadius: 40}}
        overlayStyle={{
          backgroundColor: 'transparent',
        }}>
        <View style={{flex: 1, height: 180, padding: 10}}>
          <Text>Plastico</Text>
          <Text>Papel</Text>
          <Text>Vidro</Text>
          <Text>Alumínio</Text>
          <Text>Metal</Text>
          <Text>Lixo Eletronico</Text>
          <Text>Organico</Text>
        </View>
      </Modalize>
    </>
  );
};

const ButtonIcon = () => {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#34cb79',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 18,
          marginRight: 14,
          marginBottom: 10,
          width: 38,
        }}>
        <Text style={{fontSize: 28, color: '#f5f5f5'}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
