import Reactotron from 'reactotron-react-native';
// import AsyncStorage from '@react-native-community/async-storage';

import { BASE_URL } from 'react-native-dotenv';

if (__DEV__) {
  const tron = Reactotron.configure({ host: BASE_URL })
    .useReactNative()
    .connect();

  console.tron = tron;
  tron.clear();
}
