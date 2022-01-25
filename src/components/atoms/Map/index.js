import React, {useEffect, useRef} from 'react';

import MapView from 'react-native-maps';

import {useDispatch, useSelector} from 'react-redux';
import {readPointsCollectionRequest} from '../../../store/modules/pointsCollenction/actions';

import LoadingMap from 'components/atoms/LoadingMap';
import Points from 'components/atoms/Points';
import DrawLineToPointCollection from 'components/atoms/DrawPointToCollectionPoint';

const Index = () => {
  const mapView = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readPointsCollectionRequest());
  }, []);

  function onMapPress(e) {
    console.log(e.nativeEvent.coordinate);
  }

  const userLocation = useSelector(state => state.user.location);
  const {data, loading} = useSelector(state => state.points);

  const {visiblePointCard} = useSelector(state => state.point);

  if (loading) {
    return <LoadingMap />;
  }

  return (
    <MapView
      ref={mapView}
      style={{flex: 1}}
      showsUserLocation
      showsMyLocationButton={false}
      onPress={e => onMapPress(e)}
      initialRegion={userLocation}>
      {data.map((point, index) => {
        return <Points point={point} key={index} />;
      })}

      {visiblePointCard && <DrawLineToPointCollection />}
    </MapView>
  );
};

export default Index;
