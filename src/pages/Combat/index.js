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
  FirstLine,
  FlexCol4,
} from '../../components/Global/styles';

import { NoFlexInputBox, FixedSizedLabel } from './styles';

export default function Combat() {
  return (
    <Container>
      <ScrollView>
        <Section>
          <Row>
            <FlexCol4>
              <Label>Redução de dano</Label>
              <InputBox editable>0</InputBox>
            </FlexCol4>
            <FlexCol4>
              <Label>Pontos de ação</Label>
              <InputBox editable>0</InputBox>
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
              <InputBox editable={false}>10</InputBox>
              <InputBox editable={false}>10</InputBox>
              <InputBox editable={false}>10</InputBox>
              <InputBox editable={false}>10</InputBox>
              <InputBox editable>10</InputBox>
            </FlexCol4>
            <FlexCol4>
              <FixedSizedLabel>À Distância</FixedSizedLabel>
              <InputBox editable={false}>10</InputBox>
              <InputBox editable={false}>10</InputBox>
              <InputBox editable={false}>10</InputBox>
              <InputBox editable={false}>10</InputBox>
              <InputBox editable>10</InputBox>
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
