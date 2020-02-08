import React from 'react';
import { Picker } from '../components/Global/styles';

export const DefaultClasses = [
  { id: 0, label: '', value: 'default', group: '' },
  { id: 1, label: 'Abençoado', value: 'Abençoado', group: 'Divino' },
  { id: 2, label: 'Artífice', value: 'Artífice', group: 'Especialista' },
  { id: 3, label: 'Bárbaro', value: 'Bárbaro', group: 'Combatente' },
  { id: 4, label: 'Bardo', value: 'Bardo', group: 'Especialista' },
  { id: 5, label: 'Cavaleiro', value: 'Cavaleiro', group: 'Combatente' },
  { id: 6, label: 'Clérigo', value: 'Clérigo', group: 'Divino' },
  { id: 7, label: 'Druida', value: 'Druida', group: 'Divino' },
  { id: 8, label: 'Feiticeiro', value: 'Feiticeiro', group: 'Arcano' },
  { id: 9, label: 'Guerreiro', value: 'Guerreiro', group: 'Combatente' },
  { id: 10, label: 'Ladino', value: 'Ladino', group: 'Especialista' },
  { id: 11, label: 'Lutador', value: 'Lutador', group: 'Combatente' },
  { id: 12, label: 'Mago', value: 'Mago', group: 'Arcano' },
  { id: 13, label: 'Monge', value: 'Monge', group: 'Combatente' },
  { id: 14, label: 'Ninja', value: 'Ninja', group: 'Especialista' },
  { id: 15, label: 'Nobre', value: 'Nobre', group: 'Especialista' },
  { id: 16, label: 'Paladino', value: 'Paladino', group: 'Divino' },
  { id: 17, label: 'Ranger', value: 'Ranger', group: 'Especialista' },
  { id: 18, label: 'Samaritano', value: 'Samaritano', group: 'Divino' },
  { id: 19, label: 'Samurai', value: 'Samurai', group: 'Combatente' },
  {
    id: 20,
    label: 'Swashbuckler',
    value: 'Swashbuckler',
    group: 'Especialista',
  },
];

export const ClassTypes = [
  {
    id: 0,
    value: 'basic',
    label: 'Básico',
  },
  {
    id: 1,
    value: 'creature',
    label: 'Criatura',
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

export const SelectClass = DefaultClasses.map(classItem => {
  return (
    <Picker.Item
      key={classItem.id}
      value={classItem.value}
      label={classItem.label}
    />
  );
});
