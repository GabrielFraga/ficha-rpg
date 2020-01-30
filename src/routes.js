import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Habilities from './pages/Habilities';

import RaceInfo from './pages/RaceInfo';

const Routes = createAppContainer(
  // createSwitchNavigator(
  createStackNavigator(
    {
      Habilidades: {
        screen: Habilities,
      },
      Raça: {
        screen: RaceInfo,
        navigationOptions: {
          headerTitle: 'Detalhes da Raça',
        },
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#721410',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          color: 'white',
        },
      },
    },
  ),
  // ),
);
export default Routes;
