import React, { useState, useEffect } from 'react';
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
    { name: 'Força', val: 0, mod: 0 },
    { name: 'Destreza', val: 0, mod: 0 },
    { name: 'Constituição', val: 0, mod: 0 },
    { name: 'Inteligência', val: 0, mod: 0 },
    { name: 'Sabedoria', val: 0, mod: 0 },
    { name: 'Carisma', val: 0, mod: 0 },
  ];

  const [habs, setHabs] = useState(Habs);
  const [data, setData] = useState(true);

  function handleHabChange(item) {
    const newMod = (() => {
      switch (item.val) {
        case 1:
          return -5;
        case 2 || 3:
          return -4;
        case 4 || 5:
          return -3;
        case 6 || 7:
          return -2;
        case 8 || 9:
          return -1;
        case 10 || 11:
          return 0;
        case 12 || 13:
          return 1;
        case 14 || 15:
          return 2;
        case 16 || 17:
          return 3;
        case 18 || 19:
          return 4;
        case 20 || 21:
          return 5;
        case 22 || 23:
          return 6;
        case 24 || 25:
          return 7;
        default:
          return 0;
      }
    })();

    setData(!data);
    setHabs(habs.map(h => (h.name === item.name ? { ...h, mod: 5 } : h)));
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
              onChangeText={() => handleHabChange(item)}
              keyboardType="numeric">
              {item.val}
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
