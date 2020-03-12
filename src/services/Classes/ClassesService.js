import React from 'react';
import { Picker } from '../../components/Global/styles';

import ClassesModel from './model.clasess';

export const getAllBBAForClass = caracterClassName => {
  const { bba } = ClassesModel[
    ClassesModel.findIndex(item => item.value === caracterClassName.name)
  ];

  return bba;
};

export const filterLevelBBA = (bba, caracterLevel) => {
  const { bonus } = bba.filter(item => item.level === caracterLevel)[0];

  return bonus;
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
