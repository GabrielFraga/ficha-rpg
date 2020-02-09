import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { RectButton } from 'react-native-gesture-handler';
import { TouchableHighlight, ScrollView, Modal, Alert } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import {
  createClass,
  deleteClass,
  editClass,
  editClassLevel,
} from '../../store/modules/profile/actions';

import {
  DefaultClasses,
  ClassTypes,
  SelectClass,
  SelectClassType,
} from '../../services/DefaultClasses';

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
  const [levelState, setLevelState] = useState(0);

  useEffect(() => {
    const total = classes.reduce((x, y) => x + y.level, 0);
    setLevelState(total);
  }, [classes, level]);

  function handleCreateClass() {
    dispatch(createClass());
  }

  function handleEditClass(id, name) {
    const mainClass =
      DefaultClasses[DefaultClasses.findIndex(c => c.value === name)];

    dispatch(
      editClass(
        id,
        name,
        mainClass.initialLF,
        mainClass.lfEachLevel,
        mainClass.trainedExpertise,
      ),
    );
  }

  function handleEditClassLevel({ nativeEvent: { text } }, { id }) {
    const total = Number(text) + levelState;

    if (total <= level) {
      setLevelState(total);
      dispatch(editClassLevel(id, Number(text)));
    } else {
      Alert.alert(
        'Você não pode usar mais níveis do que seu personagem possui!',
      );
    }
  }

  function handleDeleteClass(id) {
    dispatch(deleteClass(id));
  }

  function ShowClasses() {
    return classes.map(c => {
      return (
        <Section key={String(c.id)}>
          <Row>
            <Label>Tipo</Label>
            <PickerView>
              <Picker
                prompt="Defina o tipo de classe"
                selectedValue={c.type}
                onValueChange={itemValue => setClassType(itemValue)}>
                {SelectClassType}
              </Picker>
            </PickerView>
            {c.id !== 0 && (
              <TouchableHighlight onPress={() => handleDeleteClass(c.id)}>
                <Icon name="trash-can" size={36} color="#823b38a8" />
              </TouchableHighlight>
            )}
          </Row>
          <Row>
            <Label>Classe</Label>
            <PickerView
              style={{
                flexBasis: 100,
              }}>
              <Picker
                prompt="Defina uma classe"
                selectedValue={c.name}
                onValueChange={itemValue => handleEditClass(c.id, itemValue)}>
                {SelectClass}
              </Picker>
            </PickerView>
            <Label>Nível</Label>
            <InputBox
              keyboardType="numeric"
              value={String(c.level)}
              onChange={itemValue => handleEditClassLevel(itemValue, c)}
            />
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
              <Title>
                Nívels disponíveis para distribuir: {level - levelState}
              </Title>
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
