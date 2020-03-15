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
} from '../../components/Global/styles';

import { PVColum, ResistanceTitle, ResistanceLabel } from './styles';

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
            <PVColum>
              <Label>Total</Label>
              <InputBox editable={false}>{total}</InputBox>
            </PVColum>

            <PVColum>
              <Label>Classes</Label>
              <InputBox editable={false}>{classLifePoints}</InputBox>
            </PVColum>

            <PVColum>
              <Label>Con</Label>
              <InputBox editable={false}>{constitutiontLifePoints}</InputBox>
            </PVColum>

            <PVColum>
              <Label>Épico</Label>
              <InputBox editable={false}>{epic}</InputBox>
            </PVColum>

            <PVColum>
              <Label>Outros</Label>
              <InputBox
                keyboard="numeric"
                editable
                onChangeText={handleOtherLevel}>
                {other}
              </InputBox>
            </PVColum>
          </Row>

          <Section style={{ marginTop: 20 }}>
            <Row>
              <Label>Bônus Base Ataque (BBA)</Label>
              <InputBox editable={false}>{BaseBonusAttack}</InputBox>
            </Row>
          </Section>

          <Title>Resistências</Title>
          <Row>
            <ResistanceTitle style={{ flexBasis: 80 }} />
            <ResistanceTitle>Total</ResistanceTitle>
            <ResistanceTitle>Nível / 2</ResistanceTitle>
            <ResistanceTitle>Hab</ResistanceTitle>
            <ResistanceTitle>Outros</ResistanceTitle>
          </Row>

          {resistances.map(item => {
            return (
              <Row key={item.id}>
                <ResistanceLabel>
                  {getResistenceName(item.habilityName)}
                </ResistanceLabel>
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
