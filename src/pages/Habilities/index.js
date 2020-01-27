import React from 'react';
import { Picker, TouchableHighlight } from 'react-native';

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
  HabsRow,
} from './styles';

export default function Habilities({ navigation }) {
  const dispatch = useDispatch();

  const habilities = useSelector(state => state.profile.habilities);
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
              <FinalValue style={{ marginRight: 2 }}>Val. Final</FinalValue>
              <Icon name="help-outline" size={16} color="#ed9a79" />
            </>
          </TouchableHighlight>
        </TitleView>
        <Title>Mod. </Title>
      </HabsRow>

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
