import React, { useState } from 'react';
import { Picker, TouchableHighlight, Modal } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { editHability } from '../../store/modules/profile/actions';

import { Habs, checkModificator } from '../../services/DefaultHabilities';

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
} from './styles';

export default function Habilities() {
  const dispatch = useDispatch();
  const habilities = useSelector(state => state.profile.habilities);

  const [race, setRace] = useState([]);
  const [data, setData] = useState(true);
  const [raceModal, setRaceModal] = useState(false);

  function handleHabilityChange({ nativeEvent: { text } }, item) {
    dispatch(editHability(item.name, Number(text)));
  }
  const SelectRaces = Races.map((raceItem, i) => {
    return (
      <Picker.Item key={i} value={raceItem.value} label={raceItem.label} />
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
          <Title>Descrição da Raça: {race}</Title>
        </ModalView>
      </Container>
    </Modal>
  );

  function handleRace(raceName) {
    const raceIndex = Races.findIndex(r => r.value === raceName);
    console.tron.log(Races[raceIndex]);
    setRace(raceName);
  }

  return (
    <Container>
      <Section>
        <Row>
          <InputBox placeholder="Nome" />
        </Row>
        <Row>
          <InputBox placeholder="Hab.Manual" />
          <InputBox placeholder="Hab.Auto" editable={false} />
        </Row>
        <Row>
          <InputBox placeholder="Idade" keyboardType="numeric" />
          <InputBox placeholder="Nível" keyboardType="numeric" />
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
              selectedValue={race}
              onValueChange={itemValue => handleRace(itemValue)}>
              {SelectRaces}
            </Picker>
          </PickerView>
        </Row>
      </Section>

      <Row>
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
      </Row>

      <RaceInfoModal />

      <List
        data={habilities}
        keyExtractor={hab => hab.name}
        extraData={data}
        renderItem={({ item }) => (
          <Row>
            <FlexLabel numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </FlexLabel>
            <FixedInput
              onChange={e => handleHabilityChange(e, item)}
              keyboardType="numeric">
              {item.initialValue}
            </FixedInput>
            <FixedInput editable={false} keyboardType="numeric">
              17
            </FixedInput>
            <FixedInput editable={false} keyboardType="numeric">
              {item.mod}
            </FixedInput>
          </Row>
        )}
      />
    </Container>
  );
}
