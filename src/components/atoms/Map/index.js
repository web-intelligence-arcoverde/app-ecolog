import React, {useEffect, useRef} from 'react';

import MapView from 'react-native-maps';

import {useDispatch, useSelector} from 'react-redux';
import {readPointsCollectionRequest} from '../../../store/modules/pointsCollenction/actions';

import LoadingMap from 'components/atoms/LoadingMap';
import CollectPoint from 'components/atoms/PointMap';
import DrawLineToPointCollection from 'components/atoms/DrawPointToCollectionPoint';

const Index = () => {
  const mapView = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readPointsCollectionRequest());
  }, []);

  const userLocation = useSelector(state => state.user.location);
  const {data, loading} = useSelector(state => state.points);

  if (loading) {
    return <LoadingMap />;
  }

  return (
    <MapView
      ref={mapView}
      style={{flex: 1}}
      showsUserLocation={true}
      initialRegion={userLocation}>
      {data.map((point, index) => {
        return <CollectPoint point={point} key={index} />;
      })}

      <DrawLineToPointCollection />
    </MapView>
  );
};

export default Index;
