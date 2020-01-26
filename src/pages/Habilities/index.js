import React, { useState } from 'react';
import { Picker, TouchableHighlight, Modal } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  editHability,
  editRace,
  editAge,
  editLevel,
  editName,
} from '../../store/modules/profile/actions';

import { Races } from '../../services/DefaultRaces';

import {
  Container,
  Row,
  Label,
  FlexLabel,
  InputBox,
  FixedInput,
  Section,
  List,
  Title,
  PickerView,
  TitleView,
  FinalValue,
  ModalView,
  HabsRow,
  ModalHabsRow,
  ModalFlexLabel,
  ModalFixedInput,
  Text,
  BigTitle
} from './styles';

export default function Habilities() {
  const dispatch = useDispatch();

  const habilities = useSelector(state => state.profile.habilities);
  const race = useSelector(state => state.profile.race);
  const age = useSelector(state => state.profile.age);
  const level = useSelector(state => state.profile.level);
  const name = useSelector(state => state.profile.name);

  const [raceModal, setRaceModal] = useState(false);

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

  const RaceInfoModal = () => (
    <Modal
      animationType="slide"
      transparent={false}
      visible={raceModal}
      onRequestClose={() => {
        setRaceModal(false);
      }}>
      <Container>
        <ModalView>
          <BigTitle>Modificadores da Raça: {race.name}</BigTitle>
          <Section>
            <ModalHabsRow>
              <Title>Hab.</Title>
              <Title>Raça</Title>
              <Title>Nível</Title>
              <Title>Idade</Title>
              <Title>Modelo</Title>
              <Title>Outros</Title>
            </ModalHabsRow>
            <List
              data={habilities}
              keyExtractor={hab => String(hab.id)}
              renderItem={({ item }) => (
                <ModalHabsRow>
                  <ModalFlexLabel numberOfLines={1} ellipsizeMode="tail">
                    {item.name}
                  </ModalFlexLabel>
                  <ModalFixedInput editable={false} keyboardType="numeric">
                    {item.modificators.raceMod}
                  </ModalFixedInput>
                  <ModalFixedInput editable={false} keyboardType="numeric">
                    {item.modificators.ageMod}
                  </ModalFixedInput>
                  <ModalFixedInput editable={false} keyboardType="numeric">
                    {item.modificators.levelMod}
                  </ModalFixedInput>
                  <ModalFixedInput editable={false} keyboardType="numeric">
                    {item.modificators.modelMod}
                  </ModalFixedInput>
                  <ModalFixedInput keyboardType="numeric">
                    {item.modificators.othersMod}
                  </ModalFixedInput>
                </ModalHabsRow>
              )}
            />
          </Section>
          <Row>
            <BigTitle>Detalhes da raça:</BigTitle>
          </Row>
          <Row>
            <Text>{race.info}</Text>
          </Row>
        </ModalView>
      </Container>
    </Modal>
  );

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

  return (
    <Container>
      <Section>
        <Row>
          <InputBox
            placeholder="Nome"
            value={name}
            onChange={e => handleName(e)}
          />
        </Row>
        <Row>
          <InputBox placeholder="Hab.Manual" />
          <InputBox placeholder="Hab.Auto" editable={false} />
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
            value={level}
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
                color: '#333',
              }}
              prompt="Defina uma raça"
              selectedValue={race.name}
              onValueChange={itemValue => handleRace(itemValue)}>
              {SelectRaces}
            </Picker>
          </PickerView>
        </Row>
      </Section>

      <HabsRow>
        <Title>Habilidade</Title>
        <Title>Val. Inicial</Title>
        <TitleView>
          <TouchableHighlight onPress={() => setRaceModal(true)}>
            <>
              <FinalValue>
                Val. Final
                <Icon name="help-outline" size={16} color="#ed9a79" />
              </FinalValue>
            </>
          </TouchableHighlight>
        </TitleView>
        <Title>Mod. </Title>
      </HabsRow>

      <RaceInfoModal />

      <List
        data={habilities}
        keyExtractor={hab => String(hab.id)}
        renderItem={({ item }) => (
          <HabsRow>
            <FlexLabel numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </FlexLabel>
            <FixedInput
              onChange={e => handleHabilityChange(e, item)}
              keyboardType="numeric">
              {item.initialValue}
            </FixedInput>
            <FixedInput editable={false} keyboardType="numeric">
              {item.finalValue}
            </FixedInput>
            <FixedInput editable={false} keyboardType="numeric">
              {item.mod}
            </FixedInput>
          </HabsRow>
        )}
      />
    </Container>
  );
}
