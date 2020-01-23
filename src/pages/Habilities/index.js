import React, { useState } from 'react';
import { Picker } from 'react-native';

import { Habs, checkModificator } from '../../services/DefaultHabilities';

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
  const [habs, setHabs] = useState(Habs);
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
