import React from 'react';
import { ScrollView } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import {
  Container,
  Row,
  Section,
  Title,
  Label,
  InputBox,
  FixedSizedLabel,
  FirstLine,
  FlexCol5,
  Column,
} from '../../components/Global/styles';

import {
  editOtherFieldLevel,
  editOhterFieldResitence,
} from '../../store/modules/profile/actions';

export default function Resistences() {
  const dispatch = useDispatch();

  const {
    total,
    classLifePoints,
    constitutiontLifePoints,
    epic,
    other,
  } = useSelector(state => state.profile.lifePoints);

  const BaseBonusAttack = useSelector(state => state.profile.bba);

  const resistances = useSelector(state => state.profile.resistances);

  function handleOtherLevel(data) {
    dispatch(editOtherFieldLevel(Number(data)));
  }

  function handleOtherResistence(id, value) {
    dispatch(editOhterFieldResitence(id, Number(value)));
  }

  function getResistenceName(name) {
    switch (name) {
      case 'Constituição':
        return 'Fortitude (Con)';
      case 'Destreza':
        return 'Reflexos (Des)';
      case 'Sabedoria':
        return 'Vontade (Sab)';
      default:
        return '';
    }
  }
  return (
    <Container>
      <ScrollView>
        <Section>
          <Title>Pontos de vida (PVs)</Title>
          <Row>
            <FlexCol5>
              <Label>Total</Label>
              <InputBox editable={false}>{total}</InputBox>
            </FlexCol5>

            <FlexCol5>
              <Label>Classes</Label>
              <InputBox editable={false}>{classLifePoints}</InputBox>
            </FlexCol5>

            <FlexCol5>
              <Label>Con</Label>
              <InputBox editable={false}>{constitutiontLifePoints}</InputBox>
            </FlexCol5>

            <FlexCol5>
              <Label>Épico</Label>
              <InputBox editable={false}>{epic}</InputBox>
            </FlexCol5>

            <FlexCol5>
              <Label>Outros</Label>
              <InputBox
                keyboard="numeric"
                editable
                onChangeText={handleOtherLevel}>
                {other}
              </InputBox>
            </FlexCol5>
          </Row>

          <Section style={{ marginTop: 20 }}>
            <Row>
              <Label>Bônus Base Ataque (BBA)</Label>
              <InputBox editable={false}>{BaseBonusAttack}</InputBox>
            </Row>
          </Section>

          <Title>Resistências</Title>
          <Row>
            <FirstLine />
            <FixedSizedLabel>Total</FixedSizedLabel>
            <FixedSizedLabel>Nível / 2</FixedSizedLabel>
            <FixedSizedLabel>Hab</FixedSizedLabel>
            <FixedSizedLabel>Outros</FixedSizedLabel>
          </Row>

          {resistances.map(item => {
            return (
              <Row key={item.id}>
                <FixedSizedLabel>
                  {getResistenceName(item.habilityName)}
                </FixedSizedLabel>
                <InputBox editable={false}>{item.total}</InputBox>
                <InputBox editable={false}>{item.half_level}</InputBox>
                <InputBox editable={false}>{item.hability}</InputBox>
                <InputBox
                  keyboard="numeric"
                  editable
                  onChangeText={e => handleOtherResistence(item.id, e)}>
                  {item.other}
                </InputBox>
              </Row>
            );
          })}
        </Section>
      </ScrollView>
    </Container>
  );
}
