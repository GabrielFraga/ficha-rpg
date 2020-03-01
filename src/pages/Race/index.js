import React from 'react';
import { ScrollView } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { editOtherMod } from '../../store/modules/profile/actions';

import { Container, Row, Section } from '../../components/Global/styles';

import {
  ModalView,
  ModalHabilitiesRow,
  ModalFlexLabel,
  ModalFixedInput,
  Text,
  Title,
  BigTitle,
} from './styles';

export default function Race() {
  const dispatch = useDispatch();

  const habilities = useSelector(state => state.profile.habilities);
  const race = useSelector(state => state.profile.race);

  function handleModChange({ nativeEvent: { text } }, { id }) {
    dispatch(editOtherMod({ id, value: Number(text) }));
  }

  const RaceModsList = () =>
    habilities.map(item => {
      return (
        <ModalHabilitiesRow key={item.id}>
          <ModalFlexLabel numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </ModalFlexLabel>
          <ModalFixedInput editable={false} keyboardType="numeric">
            {item.modificators.raceMod}
          </ModalFixedInput>
          <ModalFixedInput editable={false} keyboardType="numeric">
            {item.modificators.ageMod}
          </ModalFixedInput>
          <ModalFixedInput editable={false} keyboardType="numeric">
            {item.modificators.levelMod}
          </ModalFixedInput>
          <ModalFixedInput editable={false} keyboardType="numeric">
            {item.modificators.modelMod}
          </ModalFixedInput>
          <ModalFixedInput
            editable
            keyboardType="numeric"
            onChange={e => handleModChange(e, item)}>
            {item.modificators.othersMod}
          </ModalFixedInput>
        </ModalHabilitiesRow>
      );
    });

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ModalView>
          <BigTitle>Modificadores da Raça: {race.name}</BigTitle>
          <Section>
            <ModalHabilitiesRow style={{ height: 50 }}>
              <Title>Hab.</Title>
              <Title>Raça</Title>
              <Title>Idade</Title>
              <Title>Nível</Title>
              <Title>Modelo</Title>
              <Title>Outros</Title>
            </ModalHabilitiesRow>
            <RaceModsList />
          </Section>
        </ModalView>
        <ModalView>
          <Row>
            <BigTitle>Descrição da raça:</BigTitle>
          </Row>
          <Row>
            <Text>{race.info}</Text>
          </Row>
        </ModalView>
      </ScrollView>
    </Container>
  );
}
