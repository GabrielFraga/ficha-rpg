import React from 'react';

import { ScrollView } from 'react-native';
import { Container } from '../../components/Global/styles';

import HandleLevel from '../../components/Level';

import HabilityForLevel from '../../components/Level/HabilityForLevel';

export default function Level() {
  return (
    <Container>
      <ScrollView>
        <HandleLevel />
        <HabilityForLevel />
      </ScrollView>
    </Container>
  );
}
