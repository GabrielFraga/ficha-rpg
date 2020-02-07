import React, { useState } from 'react';

import { TouchableHighlight, ScrollView, Modal, Alert } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Row,
  Section,
  Title,
  Label,
  Picker,
  PickerView,
  InputBox,
} from '../../components/Global/styles';

// import { Container } from './styles';

export default function Classes() {
  const level = useSelector(state => state.profile.level);

  const [classType, setClassType] = useState('basic');
  const [classes, setClasses] = useState();

  const classTypes = [
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

  const classesList = [
    {
      id: 0,
      value: 'cav',
      label: 'Cavaleiro',
    },
    {
      id: 1,
      value: 'bard',
      label: 'Bardo',
    },
  ];

  const SelectClassType = classTypes.map(classTypeItem => {
    return (
      <Picker.Item
        key={classTypeItem.id}
        value={classTypeItem.value}
        label={classTypeItem.label}
      />
    );
  });

  const SelectClass = classesList.map(classItem => {
    return (
      <Picker.Item
        key={classItem.id}
        value={classItem.value}
        label={classItem.label}
      />
    );
  });

  return (
    <Container>
      <ScrollView>
        <Section>
          <Row>
            <Label>Tipo</Label>
            <PickerView>
              <Picker
                prompt="Defina o tipo de classe"
                selectedValue={classType}
                onValueChange={itemValue => setClassType(itemValue)}>
                {SelectClassType}
              </Picker>
            </PickerView>
          </Row>
          <Row>
            <Label>Classe</Label>
            <PickerView
              style={{
                flexBasis: 100,
              }}>
              <Picker
                prompt="Defina uma classe"
                selectedValue={classes}
                onValueChange={itemValue => setClasses(itemValue)}>
                {SelectClass}
              </Picker>
            </PickerView>
            <Label>Nível</Label>
            <InputBox value={level} editable={false} />
          </Row>
        </Section>
      </ScrollView>
    </Container>
  );
}
