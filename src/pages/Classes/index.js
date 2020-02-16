import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableHighlight, ScrollView, Alert } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import LevelSelector from '../../components/Level/LevelSelector';

import {
  createClass,
  deleteClass,
  editClass,
  editClassLevel,
} from '../../store/modules/profile/actions';

import {
  ClassTypes,
  SelectClass,
  SelectClassType,
} from '../../services/Classes/ClassesService';

import ClassesModel from '../../services/Classes/model.clasess';

import {
  Container,
  Row,
  Section,
  Title,
  Label,
  Picker,
  PickerView,
} from '../../components/Global/styles';

import { Button } from './styles';

export default function Classes() {
  const dispatch = useDispatch();

  const level = useSelector(state => state.profile.level);
  const classes = useSelector(state => state.profile.classes);
  const totalClassesLevel = useSelector(state =>
    state.profile.classes.reduce((x, y) => x + y.level, 0),
  );

  const [classType, setClassType] = useState('basic');
  const [avaliableLevel, setAvaliableLevel] = useState();

  useEffect(() => {
    setAvaliableLevel(level.value - totalClassesLevel);
  }, [level.value, totalClassesLevel]);

  function handleCreateClass() {
    dispatch(createClass());
  }

  function handleEditClass(id, name) {
    const { initialLF, lfEachLevel, trainedExpertise } = ClassesModel[
      ClassesModel.findIndex(c => c.value === name)
    ];
    dispatch(editClass(id, name, initialLF, lfEachLevel, trainedExpertise));
  }

  function handleDeleteClass(id) {
    dispatch(deleteClass(id));
  }

  function handleEditClassLevel({ id, name }, add) {
    const newValue = add ? 1 : -1;

    const mainClass = classes.filter(e => e.name === name)[0];
    const selectedLevel = mainClass.level + newValue;
    const total = totalClassesLevel - mainClass.level + selectedLevel;

    if (selectedLevel > 0) {
      if (name) {
        if (total <= level.value) {
          dispatch(editClassLevel(id, selectedLevel));
        } else {
          Alert.alert(
            'Você não pode usar mais níveis do que seu personagem possui!',
          );
        }
      } else {
        Alert.alert('Defina uma classe!');
      }
    }
  }

  return (
    <Container>
      <ScrollView>
        <Section>
          <Section>
            <Row>
              <Title>
                Nívels disponíveis para distribuir: {avaliableLevel}
              </Title>
            </Row>
          </Section>

          {classes.map(c => {
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
                      <Icon name="delete" size={36} color="#823b38a8" />
                    </TouchableHighlight>
                  )}
                </Row>

                <Row>
                  <Label>Classe</Label>
                  <PickerView>
                    <Picker
                      prompt="Defina uma classe"
                      selectedValue={c.name}
                      onValueChange={itemValue =>
                        handleEditClass(c.id, itemValue)
                      }>
                      {SelectClass}
                    </Picker>
                  </PickerView>
                  <LevelSelector
                    color="#823b38a8"
                    editableStyle
                    value={String(c.level)}
                    functionMinus={() => handleEditClassLevel(c, false)}
                    functionPlus={() => handleEditClassLevel(c, true)}
                  />
                </Row>
              </Section>
            );
          })}

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
