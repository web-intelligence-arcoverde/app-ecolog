import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes/routes';

import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
