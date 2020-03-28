import React from 'react';
import SizeModel from './model.sizes';

import { Picker } from '../../components/Global/styles';

export const PickerSizes = SizeModel.map(item => {
  return <Picker.Item key={item.id} value={item.id} label={item.label} />;
});
