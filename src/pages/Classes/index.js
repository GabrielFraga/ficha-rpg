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
  const [classLevel, setClassLevel] = useState(0);
  const [avaliableLevel, setAvaliableLevel] = useState([]);

  useEffect(() => {
    const total = classes.reduce((x, y) => x + y.level, 0);
    setClassLevel(total);
  }, [classes, level]);

  useEffect(() => {
    // const avaliableLevels = level - classLevel;
    let cont = 0;
    const list = [];
    while (cont <= level) {
      list.push(cont);

      cont += 1;
    }
    setAvaliableLevel(list);
  }, [level, classLevel]);

  function handleCreateClass() {
    dispatch(createClass());
  }

  function handleEditClass(id, name) {
    const { initialLF, lfEachLevel, trainedExpertise } = DefaultClasses[
      DefaultClasses.findIndex(c => c.value === name)
    ];
    dispatch(editClass(id, name, initialLF, lfEachLevel, trainedExpertise));
  }

  function handleEditClassLevel({ id, name }, levelClass) {
    const total = Number(levelClass) - classLevel;

    if (total <= level && name) {
      setClassLevel(total);
      dispatch(editClassLevel(id, Number(levelClass)));
    } else if (!name) {
      Alert.alert('Defina uma classe!');
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
            <PickerView>
              <Picker
                prompt="Defina uma classe"
                selectedValue={c.name}
                onValueChange={itemValue => handleEditClass(c.id, itemValue)}>
                {SelectClass}
              </Picker>
            </PickerView>

            <Label>Nível</Label>
            <PickerView>
              <Picker
                prompt="Defina o nível de classe"
                selectedValue={c.level}
                onValueChange={itemValue => handleEditClassLevel(c, itemValue)}>
                {avaliableLevel.map(levelItem => {
                  return (
                    <Picker.Item
                      key={String(levelItem)}
                      value={levelItem}
                      label={`${levelItem}`}
                    />
                  );
                })}
              </Picker>
            </PickerView>
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
                Nívels disponíveis para distribuir: {level - classLevel}
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
