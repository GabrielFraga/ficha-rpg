import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Habilities from './pages/Habilities';

import Race from './pages/Race';

import Classes from './pages/Classes';

import Level from './pages/Level';

const Routes = createAppContainer(
  // createSwitchNavigator(
  createStackNavigator(
    {
      Habilidades: {
        screen: Habilities,
      },
      Raça: {
        screen: Race,
        navigationOptions: {
          headerTitle: 'Detalhes da Raça',
        },
      },
      Níveis: {
        screen: Level,
        navigationOptions: {
          headerTitle: 'Níveis',
        },
      },
      Classes: {
        screen: Classes,
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
