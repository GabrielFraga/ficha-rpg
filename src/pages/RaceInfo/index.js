import React from 'react';
import { ScrollView } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import { editOtherMod } from '../../store/modules/profile/actions';

import { Container, Row, Section, Title } from '../../components/Global/styles';

import {
  ModalView,
  ModalHabsRow,
  ModalFlexLabel,
  ModalFixedInput,
  Text,
  BigTitle,
} from './styles';

export default function RaceInfo() {
  const dispatch = useDispatch();

  const habilities = useSelector(state => state.profile.habilities);
  const race = useSelector(state => state.profile.race);

  function handleModChange({ nativeEvent: { text } }, { id }) {
    dispatch(editOtherMod(id, Number(text)));
  }

  const RaceModsList = () =>
    habilities.map(item => {
      return (
        <ModalHabsRow key={item.id}>
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
            keyboardType="numeric"
            onChange={e => handleModChange(e, item)}>
            {item.modificators.othersMod}
          </ModalFixedInput>
        </ModalHabsRow>
      );
    });

  return (
    <Container>
      <ModalView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <BigTitle>Modificadores da Raça: {race.name}</BigTitle>
          <Section>
            <ModalHabsRow style={{ height: 50 }}>
              <Title>Hab.</Title>
              <Title>Raça</Title>
              <Title>Idade</Title>
              <Title>Nível</Title>
              <Title>Modelo</Title>
              <Title>Outros</Title>
            </ModalHabsRow>
            <RaceModsList />
          </Section>
          <Row>
            <BigTitle>Detalhes da raça:</BigTitle>
          </Row>
          <Row>
            <Text>{race.info}</Text>
          </Row>
        </ScrollView>
      </ModalView>
    </Container>
  );
}
