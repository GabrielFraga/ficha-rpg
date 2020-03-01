import React from 'react';
import { TouchableHighlight, ScrollView } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import HandleLevel from '../../components/Level';

import {
  Container,
  Row,
  Section,
  Title,
  Label,
  Picker,
  InputBox,
  PickerView,
  TitleView,
  HabilitiesRow,
} from '../../components/Global/styles';

import { PVColum, Column } from './styles';

import { editOtherFieldLevel } from '../../store/modules/profile/actions';

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
        {/* <Section>
          <Title>Habilidades</Title>
          <Row
            style={{
              flexWrap: 'wrap',
            }}>
            {habilities.map(item => {
              return (
                <Column
                  key={item.id}
                  style={{
                    flexBasis: 100,
                    justifyContent: 'center',
                  }}>
                  <Label numberOfLines={1} ellipsizeMode="tail">
                    {item.name}
                  </Label>
                  <Row>
                    <InputBox>
                      {item.finalValue} ({item.mod})
                    </InputBox>
                  </Row>
                </Column>
              );
            })}
          </Row>
        </Section>
 */}
        <Section>
          <Title>Pontos de vida (PVs)</Title>
          <Row>
            <PVColum>
              <Label>Total</Label>
              <InputBox>{total}</InputBox>
            </PVColum>

            <PVColum>
              <Label>Classes</Label>
              <InputBox>{classLifePoints}</InputBox>
            </PVColum>

            <PVColum>
              <Label>Con</Label>
              <InputBox>{constitutiontLifePoints}</InputBox>
            </PVColum>

            <PVColum>
              <Label>Épico</Label>
              <InputBox>{epic}</InputBox>
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
              <Title>Bônus Base Ataque (BBA)</Title>
              <InputBox>{BaseBonusAttack}</InputBox>
            </Row>
          </Section>

          <Title>Resistências</Title>
          <Row>
            <Title style={{ flexBasis: 80 }} />
            <Title style={{ flexBasis: 60 }}>Total</Title>
            <Title style={{ flexBasis: 60 }}>Nível / 2</Title>
            <Title style={{ flexBasis: 60 }}>Hab</Title>
            <Title style={{ flexBasis: 60 }}>Outros</Title>
          </Row>

          {Object.values(resistances).map(item => {
            return (
              <>
                <Row key={item.id}>
                  <Label style={{ flexBasis: 80 }}>
                    {getResistenceName(item.habilityName)}
                  </Label>
                  <InputBox>{item.total}</InputBox>
                  <InputBox>{item.half_level}</InputBox>
                  <InputBox>{item.hability}</InputBox>
                  <InputBox>{item.other}</InputBox>
                </Row>
              </>
            );
          })}
        </Section>
      </ScrollView>
    </Container>
  );
}
