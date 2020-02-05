import React, { useState } from 'react';
import { Picker, TouchableHighlight, ScrollView, Modal } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  editHability,
  editRace,
  editAge,
  editLevel,
  editName,
  editLevelMod,
} from '../../store/modules/profile/actions';

import { Races } from '../../services/DefaultRaces';
import { Habs } from '../../services/DefaultHabilities';

import { Container, Row, Section, Title } from '../../components/Global/styles';

import {
  Label,
  FlexLabel,
  InputBox,
  FixedInput,
  PickerView,
  TitleView,
  FinalValue,
  HabsRow,
  LvlHabButton,
  ButtonContent,
  ModalContainer,
  ModalContent,
  RadioButtonContainer,
  TouchableOpacity,
  CheckedCircle,
  RadioOptionsContainer,
} from './styles';

export default function Habilities({ navigation }) {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [checkedValue, setCheckedValue] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState([]);

  const habilities = useSelector(state => state.profile.habilities);
  const HablevelMod = useSelector(state =>
    state.profile.habilities.map(e => ({
      id: e.id,
      level: e.levelMod.level,
      total: e.levelMod.reduce((x, y) => x + y.value, 0),
    })),
  );
  const race = useSelector(state => state.profile.race);
  const age = useSelector(state => state.profile.age);
  const level = useSelector(state => state.profile.level);
  const name = useSelector(state => state.profile.name);

  function handleHabilityChange({ nativeEvent: { text } }, item) {
    dispatch(editHability(item.name, Number(text)));
  }

  const SelectRaces = Races.map(raceItem => {
    return (
      <Picker.Item
        key={raceItem.value}
        value={raceItem.value}
        label={raceItem.label}
      />
    );
  });

  function handleRace(raceName) {
    const raceIndex = Races.findIndex(r => r.value === raceName);
    dispatch(editRace(Races[raceIndex]));
  }

  function handleAge({ nativeEvent: { text } }) {
    dispatch(editAge(text));
  }

  function handleLevel({ nativeEvent: { text } }) {
    dispatch(editLevel(text));
  }

  function handleName({ nativeEvent: { text } }) {
    dispatch(editName(text));
  }

  function openLevelModal(lvl) {
    setSelectedLevel(lvl);
    setModalVisible(true);
  }

  function handleLevelHability(HabId) {
    setCheckedValue(HabId);
    dispatch(
      editLevelMod({
        id: HabId,
        level: selectedLevel,
      }),
    );
  }

  function checkValue(item) {
    let levelM = null;

    habilities.forEach(h => {
      h.levelMod.forEach(m => {
        if (h.id === item  &&  m.level === selectedLevel) {
          levelM = m.level;
        }
      });
    });

    if (levelM) {
      return <CheckedCircle />;
    }

    return false;
  }

  const HabilitiesList = () =>
    habilities.map(item => {
      return (
        <HabsRow key={item.id}>
          <FlexLabel numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </FlexLabel>
          <FixedInput
            onChange={e => handleHabilityChange(e, item)}
            keyboardType="numeric">
            {item.initialValue}
          </FixedInput>
          <FixedInput editable={false}>{item.finalValue}</FixedInput>
          <FixedInput editable={false}>{item.mod}</FixedInput>
        </HabsRow>
      );
    });

  const LvlModal = () => {
    const RadioButtons = ({ options }) => {
      return options.map(item => {
        return (
          <RadioButtonContainer key={item.id}>
            <ButtonContent>{item.name}</ButtonContent>
            <TouchableOpacity onPress={() => handleLevelHability(item.id)}>
              {checkValue(item.id)}
            </TouchableOpacity>
          </RadioButtonContainer>
        );
      });
    };

    return (
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <ModalContainer>
          <ModalContent>
            <TitleView>
              <Title>
                Bônus acrescentado ao atingir o Nível {selectedLevel}
              </Title>
            </TitleView>
            <RadioOptionsContainer>
              <RadioButtons options={Habs} />
            </RadioOptionsContainer>
          </ModalContent>
        </ModalContainer>
      </Modal>
    );
  };

  const LevelHabilityList = () => {
    const list = [];
    for (let i = 2; i <= 40; i++) {
      if (i % 2 === 0) {
        list.push(i);
      }
    }

    return (
      <HabsRow
        style={{
          flexWrap: 'wrap',
          marginTop: 20,
          marginBottom: 20,
        }}>
        <Title>Defina as habilidades que recebem +1 nos níveis pares</Title>

        {list.map(itemLevel => {
          return (
            <LvlHabButton
              key={String(itemLevel)}
              onPress={() => openLevelModal(itemLevel)}>
              <ButtonContent>LVL: {itemLevel}</ButtonContent>
            </LvlHabButton>
          );
        })}
      </HabsRow>
    );
  };

  return (
    <Container>
      <ScrollView>
        <Section>
          <Row>
            <Label>Nome:</Label>
            <InputBox value={name} onChange={e => handleName(e)} />
          </Row>

          <Row>
            <Label>Idade:</Label>
            <InputBox
              value={age}
              onChange={e => handleAge(e)}
              keyboardType="numeric"
            />
            <Label>Nível:</Label>
            <InputBox
              value={String(level)}
              onChange={e => handleLevel(e)}
              keyboardType="numeric"
            />
          </Row>
          <Row>
            <Label>Raça:</Label>
            <PickerView>
              <Picker
                style={{
                  borderRadius: 4,
                  color: '#fff',
                  background: '#823b38a8',
                }}
                prompt="Defina uma raça"
                selectedValue={race.name}
                onValueChange={itemValue => handleRace(itemValue)}>
                {SelectRaces}
              </Picker>
            </PickerView>
          </Row>
        </Section>

        <HabsRow style={{ height: 50 }}>
          <Title>Habilidade</Title>
          <Title>Val. Inicial</Title>
          <TitleView style={{ alignItems: 'center' }}>
            <TouchableHighlight
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('Raça')}>
              <>
                <FinalValue style={{ marginRight: 5 }}>Val. Final</FinalValue>
                <Icon name="help-outline" size={16} color="#ed9a79" />
              </>
            </TouchableHighlight>
          </TitleView>
          <Title>Mod. </Title>
        </HabsRow>

        <HabilitiesList />
        <LevelHabilityList />
        <LvlModal />
      </ScrollView>
    </Container>
  );
}
