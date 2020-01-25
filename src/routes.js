import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Habilities from './pages/Habilities';

const Routes = createAppContainer(
  createSwitchNavigator({
    Habilities,
  }),
);
export default Routes;
