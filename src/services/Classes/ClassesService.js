import React from 'react';
import { Picker } from '../../components/Global/styles';

import ClassesModel from './model.clasess';

export const findBBA = className => {
  const { bba } = ClassesModel[
    ClassesModel.findIndex(c => c.value === className.name)
  ];

  return bba;
};

export const ClassTypes = [
  {
    id: 0,
    value: 'basic',
    label: 'Básico',
  },
  {
    id: 1,
    value: 'prestigio',
    label: 'Prestígio',
  },
];

export const SelectClassType = ClassTypes.map(classTypeItem => {
  return (
    <Picker.Item
      key={classTypeItem.id}
      value={classTypeItem.value}
      label={classTypeItem.label}
    />
  );
});

export const SelectClass = ClassesModel.map(classItem => {
  return (
    <Picker.Item
      key={classItem.id}
      value={classItem.value}
      label={classItem.label}
    />
  );
});
