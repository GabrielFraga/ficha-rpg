import React from 'react';
import { TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Label, LevelInputBox } from '../../Global/styles';

export default function LevelSelector({
  color,
  editableStyle,
  value,
  functionMinus,
  functionPlus,
}) {
  return (
    <>
      <Label style={{ marginRight: 5 }}>Nível</Label>
      <TouchableHighlight onPress={() => functionMinus()}>
        <Icon name="remove-circle-outline" size={24} color={color} />
      </TouchableHighlight>
      <LevelInputBox
        editable={false}
        editableStyle={editableStyle}
        value={value}
        keyboardType="numeric"
      />
      <TouchableHighlight onPress={() => functionPlus()}>
        <Icon name="add-circle-outline" size={24} color={color} />
      </TouchableHighlight>
    </>
  );
}
