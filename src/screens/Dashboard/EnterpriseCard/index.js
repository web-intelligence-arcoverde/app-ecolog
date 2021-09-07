import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {closeInformationCardEnterprise} from '../../../store/modules/enterprise/actions';

const Index = () => {
  const enterprise = useSelector(state => state.enterprise.enterprise);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 50,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{flexDirection: 'row', width: '90%', marginBottom: 10}} />
      <View
        style={{
          width: '90%',
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
          backgroundColor: '#fff',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, marginLeft: 10}}>
            {/* Name & Rating */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text>{enterprise.enterprise}</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => dispatch(closeInformationCardEnterprise())}>
                  <Text>x</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Restaurant */}
            <Text>Qualquer um</Text>
          </View>
        </View>

        {/* Buttons */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 5 * 2,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 50,
              marginRight: 10,

              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              height: 50,
              backgroundColor: '#f5f5f5',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Index;
