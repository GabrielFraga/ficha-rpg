import React from 'react';
import { Picker } from '../../components/Global/styles';

import RacesModel from './model.races';

export const PickerRaces = RacesModel.map(raceItem => {
  return (
    <Picker.Item
      key={raceItem.value}
      value={raceItem.value}
      label={raceItem.label}
    />
  );
});
