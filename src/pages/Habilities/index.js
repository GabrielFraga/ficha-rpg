import React, { useState } from 'react';
import { Picker } from 'react-native';

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
} from './styles';

export default function Habilities() {
  const Habs = [
    { name: 'Força', value: 0, mod: 0 },
    { name: 'Destreza', value: 0, mod: 0 },
    { name: 'Constituição', value: 0, mod: 0 },
    { name: 'Inteligência', value: 0, mod: 0 },
    { name: 'Sabedoria', value: 0, mod: 0 },
    { name: 'Carisma', value: 0, mod: 0 },
  ];

  const [habs, setHabs] = useState(Habs);
  const [data, setData] = useState(true);

  function handleHabChange({ nativeEvent: { text } }, item) {
    let newMod = 0;

    switch (Number(text)) {
      case 1:
        newMod = -5;
        break;
      case 2:
      case 3:
        newMod = -4;
        break;
      case 4:
      case 5:
        newMod = -3;
        break;
      case 6:
      case 7:
        newMod = -2;
        break;
      case 8:
      case 9:
        newMod = -1;
        break;
      case 10:
      case 11:
        newMod = 0;
        break;
      case 12:
      case 13:
        newMod = 1;
        break;
      case 14:
      case 15:
        newMod = 2;
        break;
      case 16:
      case 17:
        newMod = 3;
        break;
      case 18:
      case 19:
        newMod = 4;
        break;
      case 20:
      case 21:
        newMod = 5;
        break;
      case 22:
      case 23:
        newMod = 6;
        break;
      case 24:
      case 25:
        newMod = 7;
        break;
      default:
        newMod = 0;
    }
    setData(!data);
    setHabs(
      habs.map(h =>
        h.name === item.name ? { ...h, value: text, mod: newMod } : h,
      ),
    );
  }

  return (
    <Container>
      <Section>
        <Row>
          <InputBox placeholder="Nome" />
        </Row>
        <Row>
          <InputBox placeholder="Raça" />
          <InputBox placeholder="Hab.Manual" />
          <InputBox placeholder="Hab.Auto" editable={false} />
        </Row>
        <Row>
          <Label>Idade:</Label>
          <InputBox keyboardType="numeric" />
          <Label>Nível:</Label>
          <InputBox keyboardType="numeric" />
        </Row>
      </Section>

      <Row>
        <Title>Habilidade</Title>
        <Title>Valor</Title>
        <Title>Modificador</Title>
      </Row>

      <List
        data={habs}
        keyExtractor={hab => hab.name}
        extraData={data}
        renderItem={({ item }) => (
          <Row>
            <FlexLabel>{item.name}</FlexLabel>
            <FixedInput
              onChange={e => handleHabChange(e, item)}
              keyboardType="numeric">
              {item.value}
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
