import React, {useState} from 'react';

import {View, TouchableOpacity, Text} from 'react-native';

import CategoriesView from 'components/atoms/ModalCategories/';
import Map from 'components/atoms/Map';

import {useSelector} from 'react-redux';

const Index = () => {
  const [open, setOpen] = useState(false);

  const openCardEnterprise = useSelector(
    state => state.enterprise.visibleInformationCard,
  );

  const setRenderEnterpriseCard = () => {
    setOpen(!open);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Map onChangeCard={setRenderEnterpriseCard} />
    </View>
  );
};

export default Index;
