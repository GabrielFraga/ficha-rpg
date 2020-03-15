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
  FixedSizedLabel,
  FlexCol4,
} from '../../components/Global/styles';

import { NoFlexInputBox } from './styles';

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
            <FirstLine />
            <FixedSizedLabel>Teste</FixedSizedLabel>

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
            <FlexCol4>
              <Label>Total</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FlexCol4>

            <FlexCol4>
              <Label>Base</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FlexCol4>

            <FlexCol4>
              <Label>Nível / 2</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FlexCol4>

            <FlexCol4>
              <Label>Des.</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FlexCol4>

            <FlexCol4>
              <Label>Arm.</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FlexCol4>

            <FlexCol4>
              <Label>Mod.</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FlexCol4>

            <FlexCol4>
              <Label>Tam.</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FlexCol4>

            <FlexCol4>
              <Label>Outros</Label>
              <NoFlexInputBox editable={false}>10</NoFlexInputBox>
            </FlexCol4>
          </Row>
        </Section>
      </ScrollView>
    </Container>
  );
}
