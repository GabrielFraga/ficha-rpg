import 'react-native-gesture-handler';
import React from 'react';
import './config/ReactotronConfig';

import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './store';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="bright-clor" backgroundColor="#721410" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
