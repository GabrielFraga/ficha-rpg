import React from 'react';
import { ScrollView } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import {
  editDamageReduction,
  editActionPoints,
  editMeleeAttack,
  editRangeAttack,
} from '../../store/modules/profile/actions';

import {
  Container,
  Row,
  Section,
  Title,
  Label,
  InputBox,
  FlexCol4,
} from '../../components/Global/styles';

import { FixedSizedLabel } from './styles';

export default function Combat() {
  const dispatch = useDispatch();

  const damageReduction = useSelector(
    state => state.profile.combat.damageReduction,
  );

  const actionPoints = useSelector(state => state.profile.combat.actionPoints);

  const melee = useSelector(state => state.profile.combat.basicAttacks.melee);

  const range = useSelector(state => state.profile.combat.basicAttacks.range);

  function handleDamageReduction(value) {
    dispatch(editDamageReduction(Number(value)));
  }

  function handleActionPoints(value) {
    dispatch(editActionPoints(Number(value)));
  }

  function handleMeleeAttack(value) {
    dispatch(editMeleeAttack(Number(value)));
  }

  function handleRangeAttack(value) {
    dispatch(editRangeAttack(Number(value)));
  }

  return (
    <Container>
      <ScrollView>
        <Section>
          <Row>
            <FlexCol4>
              <Label>Redução de dano</Label>
              <InputBox editable onChangeText={handleDamageReduction}>
                {damageReduction}
              </InputBox>
            </FlexCol4>
            <FlexCol4>
              <Label>Pontos de ação</Label>
              <InputBox editable onChangeText={handleActionPoints}>
                {actionPoints}
              </InputBox>
            </FlexCol4>
          </Row>
        </Section>

        <Section>
          <Title>Ataques Básicos</Title>
          <Row>
            <FlexCol4>
              <FixedSizedLabel />

              <FixedSizedLabel>Total</FixedSizedLabel>
              <FixedSizedLabel>BBA</FixedSizedLabel>
              <FixedSizedLabel>Hab.</FixedSizedLabel>
              <FixedSizedLabel>Tam.</FixedSizedLabel>
              <FixedSizedLabel>Outros</FixedSizedLabel>
            </FlexCol4>
            <FlexCol4>
              <FixedSizedLabel>Corpo a Corpo</FixedSizedLabel>
              <InputBox editable={false}>{melee.total}</InputBox>
              <InputBox editable={false}>{melee.bba}</InputBox>
              <InputBox editable={false}>{melee.habilities}</InputBox>
              <InputBox editable={false}>{melee.size}</InputBox>
              <InputBox
                keyboard="numeric"
                editable
                onChangeText={handleMeleeAttack}>
                {melee.other}
              </InputBox>
            </FlexCol4>
            <FlexCol4>
              <FixedSizedLabel>À Distância</FixedSizedLabel>
              <InputBox editable={false}>{range.total}</InputBox>
              <InputBox editable={false}>{range.bba}</InputBox>
              <InputBox editable={false}>{range.habilities}</InputBox>
              <InputBox editable={false}>{range.size}</InputBox>
              <InputBox
                keyboard="numeric"
                editable
                onChangeText={handleRangeAttack}>
                {range.other}
              </InputBox>
            </FlexCol4>
          </Row>
        </Section>

        <Section>
          <Title>Classe de Armadura</Title>

          <Row>
            <FlexCol4>
              <FixedSizedLabel>Total</FixedSizedLabel>
              <FixedSizedLabel>Base</FixedSizedLabel>
              <FixedSizedLabel>Nível / 2</FixedSizedLabel>
              <FixedSizedLabel>Des.</FixedSizedLabel>
            </FlexCol4>
            <FlexCol4>
              <InputBox editable={false}>10</InputBox>
              <InputBox editable={false}>10</InputBox>
              <InputBox editable={false}>10</InputBox>
              <InputBox editable={false}>10</InputBox>
            </FlexCol4>
            <FlexCol4>
              <FixedSizedLabel>Arm.</FixedSizedLabel>
              <FixedSizedLabel>Mod.</FixedSizedLabel>
              <FixedSizedLabel>Tam.</FixedSizedLabel>
              <FixedSizedLabel>Outros</FixedSizedLabel>
            </FlexCol4>
            <FlexCol4>
              <InputBox editable={false}>10</InputBox>
              <InputBox editable={false}>10</InputBox>
              <InputBox editable={false}>10</InputBox>
              <InputBox editable={false}>10</InputBox>
            </FlexCol4>
          </Row>
        </Section>
      </ScrollView>
    </Container>
  );
}
