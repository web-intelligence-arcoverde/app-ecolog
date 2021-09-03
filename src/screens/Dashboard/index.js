import React, {useState, useRef} from 'react';

import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';

const {height, width} = Dimensions.get('window');

import Img from '../../assets/images/mini-logo.png';

const data = [
  {
    enterprise: 'Casa',
    latitude: -8.41789,
    longitude: -37.034227,
  },
  {
    enterprise: 'EREMA',
    latitude: -8.41719,
    longitude: -37.03838,
  },
  {
    enterprise: 'Lions',
    latitude: 8.416129,
    longitude: -37.03647,
  },
  {
    enterprise: 'Esporte',
    latitude: -8.418841,
    longitude: -37.044705,
  },
  {
    enterprise: 'Centro',
    latitude: 8.419551,
    longitude: -37.055889,
  },
];

const Index = () => {
  const [angle, setAngle] = React.useState(0);
  const carIcon = () => (
    <Marker anchor={{x: 0.5, y: 0.5}} flat={true} rotation={angle}>
      <View
        source={Img}
        style={{
          width: 40,
          height: 40,
        }}
      />
    </Marker>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {RenderMap()}
      {renderDeliveryInfo()}
    </View>
  );
};

function RenderMap() {
  const [duration, setDuration] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [angle, setAngle] = useState(0);

  const mapView = useRef();

  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.05; //Very high zoom level
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  function calculateAngle(coordinates) {
    let startLat = coordinates[0].latitude;
    let startLng = coordinates[0].longitude;
    let endLat = coordinates[1].latitude;
    let endLng = coordinates[1].longitude;
    let dx = endLat - startLat;
    let dy = endLng - startLng;

    return (Math.atan2(dy, dx) * 180) / Math.PI;
  }

  return (
    <MapView
      ref={mapView}
      style={{flex: 1}}
      initialRegion={{
        latitude: -8.41955,
        longitude: -37.0652,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}>
      {data.map((dev, index) => (
        <Marker
          key={index}
          image={Img}
          calloutAnchor={{
            x: 2.9,
            y: 0.8,
          }}
          coordinate={{
            latitude: Number(dev.latitude),
            longitude: Number(dev.longitude),
          }}>
          <Callout tooltip>
            <View>
              <Text>Lucas</Text>
            </View>
          </Callout>
        </Marker>
      ))}
    </MapView>
  );
}

function renderDeliveryInfo() {
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
      <View style={{flexDirection: 'row', width: '90%', marginBottom: 10}}>
        <View
          style={{
            backgroundColor: '#34CB79',
            paddingHorizontal: 40,
            paddingVertical: 6,
            borderRadius: 20,
          }}>
          <Text style={{color: '#fff'}}>Lucas</Text>
        </View>
      </View>
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
              <Text>Henrique</Text>
              <View style={{flexDirection: 'row'}}>
                <Text>25</Text>
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
}

export default Index;
