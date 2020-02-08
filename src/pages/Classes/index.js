import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { TouchableHighlight, ScrollView, Modal, Alert } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { createClass } from '../../store/modules/profile/actions';

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

import { Button } from './styles';

export default function Classes() {
  const dispatch = useDispatch();

  const level = useSelector(state => state.profile.level);
  const classes = useSelector(state => state.profile.classes);

  const [classType, setClassType] = useState('basic');
  const [defaultClass, setDefaultClass] = useState();
  const [classesToShow, setClassesToShow] = useState(1);

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

  function handleCreateClass() {
    dispatch(createClass());
  }

  function ShowClasses() {
    return classes.map(c => {
      return (
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
                selectedValue={defaultClass}
                onValueChange={itemValue => setDefaultClass(itemValue)}>
                {SelectClass}
              </Picker>
            </PickerView>
            <Label>Nível</Label>
            <InputBox editable={false} />
          </Row>
        </Section>
      );
    });
  }

  return (
    <Container>
      <ScrollView>
        <Section>
          <Section>
            <Row>
              <Title>Nível do personagem: {level}</Title>
            </Row>
          </Section>
          <ShowClasses />
          <Row>
            <Button onPress={() => handleCreateClass()}>
              <Title>Adicionar classe</Title>
            </Button>
          </Row>
        </Section>
      </ScrollView>
    </Container>
  );
}
