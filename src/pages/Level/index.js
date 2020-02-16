import React from 'react';

import { ScrollView } from 'react-native';
import { Container } from '../../components/Global/styles';

import {
  Level as LevelSelector,
  HabilityLevelOptions,
} from '../../components/Level';

export default function Level() {
  return (
    <Container>
      <ScrollView>
        <LevelSelector />
        <HabilityLevelOptions />
      </ScrollView>
    </Container>
  );
}
