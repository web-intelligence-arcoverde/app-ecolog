import React, {useState} from 'react';

import {View, StyleSheet, Text, Image, Alert} from 'react-native';

import {Button} from 'react-native-elements';

import MapView from 'react-native-maps';
import ModalPointRecycling from '../../components/CreateDescart';

const Map = () => {
  const [region, setRegion] = useState({
    latitude: -8.418933,
    longitude: -37.055584,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [pontos, setPontos] = useState([]);
  const [tipoConta, setTipoConta] = useState('');
  const [isAddVisible, setIAddVisible] = useState(false);
  const [addColeta, setAddColeta] = useState(false);
  const [atualMarker, setAtualMarker] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [itemParaColeta, setItemParaColeta] = useState(null);

  const onRegionChange = (region) => {
    setRegion(region);
  };

  function handleMapPress(coordinates) {
    if (addColeta) {
      setIdAddVisible(true);
      setAtualMarker(coordinates);
    }
  }

  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region} />
      <View style={styles.btnAdd}>
        <Button
          title="Adicionar Ponto"
          onPress={() => {
            coletarItemSelecionado();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnAdd: {
    position: 'absolute',
    bottom: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default Map;
