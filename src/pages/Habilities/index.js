import React, { useState } from 'react';
import { Picker } from 'react-native';

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
  SimpleText,
} from './styles';

export default function Habilities() {
  const [habs, setHabs] = useState(Habs);
  const [race, setRace] = useState([]);
  const [data, setData] = useState(true);

  function handleHabChange({ nativeEvent: { text } }, item) {
    const modificator = checkModificator(text);

    setData(!data);
    setHabs(
      habs.map(h =>
        h.name === item.name ? { ...h, value: text, mod: modificator } : h,
      ),
    );
  }

  const SelectRaces = Races.map((raceItem, i) => {
    return (
      <Picker.Item key={i} value={raceItem.value} label={raceItem.label} />
    );
  });

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
              onValueChange={(itemValue, itemIndex) => setRace(itemValue)}>
              {SelectRaces}
            </Picker>
          </PickerView>
        </Row>
      </Section>

      <Row>
        <Title>Habilidade</Title>
        <Title>Valor Inicial</Title>
        <Title>Modificadores</Title>
        <Title>Valor Final</Title>
        <Title>Mod.</Title>
      </Row>

      <List
        data={habs}
        keyExtractor={hab => hab.name}
        extraData={data}
        renderItem={({ item }) => (
          <Row>
            <FlexLabel numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </FlexLabel>
            <FixedInput
              onChange={e => handleHabChange(e, item)}
              keyboardType="numeric">
              {item.value}
            </FixedInput>
            <SimpleText> + </SimpleText>
            <SimpleText editable={false} keyboardType="numeric">
              2
            </SimpleText>
            <SimpleText> = </SimpleText>
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
