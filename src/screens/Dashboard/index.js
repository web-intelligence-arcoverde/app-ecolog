import React, {useState} from 'react';

import {View, TouchableOpacity, Text} from 'react-native';

import PointCard from 'components/atoms/PointCard';
import Map from 'components/atoms/Map';

import {useSelector} from 'react-redux';

const Index = () => {
  const [open, setOpen] = useState(false);

  const openCardEnterprise = useSelector(state => state.point.visiblePointCard);

  const setRenderEnterpriseCard = () => {
    setOpen(!open);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Map />

      <PointCard />
    </View>
  );
};

export default Index;
