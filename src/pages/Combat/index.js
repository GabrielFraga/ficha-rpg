import React from 'react';
import { ScrollView } from 'react-native';

// import { useSelector, useDispatch } from 'react-redux';

// import {
//   editOtherFieldLevel,
//   editOhterFieldResitence,
// } from '../../store/modules/profile/actions';

import {
  Container,
  Row,
  Section,
  Title,
  Label,
  InputBox,
} from '../../components/Global/styles';

import { FixedSizedColumn, NoFlexInputBox, FixedSizedLabel } from './styles';

export default function Combat() {
  return (
    <Container>
      <ScrollView>
        <Section>
          <Row>
            <FixedSizedColumn>
              <Label>Redução de dano</Label>
              <InputBox editable>0</InputBox>
            </FixedSizedColumn>
            <FixedSizedColumn>
              <Label>Pontos de ação</Label>
              <InputBox editable>0</InputBox>
            </FixedSizedColumn>
          </Row>
        </Section>

        <Section>
          <Row>
            <Title>Ataques Básicos</Title>

            <FixedSizedLabel>BBA</FixedSizedLabel>

            <FixedSizedLabel>Hab.</FixedSizedLabel>

            <FixedSizedLabel>Tam.</FixedSizedLabel>

            <FixedSizedLabel>Outros</FixedSizedLabel>
          </Row>
          <Row>
            <FixedSizedLabel>Corpo a Corpo</FixedSizedLabel>
            <InputBox editable={false}>10</InputBox>
            <InputBox editable={false}>10</InputBox>
            <InputBox editable={false}>10</InputBox>
            <InputBox editable={false}>10</InputBox>
          </Row>
          <Row>
            <FixedSizedLabel>À Distância</FixedSizedLabel>
            <InputBox editable={false}>10</InputBox>
            <InputBox editable={false}>10</InputBox>
            <InputBox editable={false}>10</InputBox>
            <InputBox editable={false}>10</InputBox>
          </Row>
        </Section>

        <Section>
          <Title>Classe de Armadura</Title>
          <Row
            style={{
              flexWrap: 'wrap',
            }}>
            <FixedSizedColumn>
              <Label>Total</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FixedSizedColumn>

            <FixedSizedColumn>
              <Label>Base</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FixedSizedColumn>

            <FixedSizedColumn>
              <Label>Nível / 2</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FixedSizedColumn>

            <FixedSizedColumn>
              <Label>Des.</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FixedSizedColumn>

            <FixedSizedColumn>
              <Label>Arm.</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FixedSizedColumn>

            <FixedSizedColumn>
              <Label>Mod.</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FixedSizedColumn>

            <FixedSizedColumn>
              <Label>Tam.</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FixedSizedColumn>

            <FixedSizedColumn>
              <Label>Outros</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FixedSizedColumn>
          </Row>
        </Section>
      </ScrollView>
    </Container>
  );
}
