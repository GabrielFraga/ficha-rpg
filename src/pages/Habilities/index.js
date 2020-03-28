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
  PickerView,
  InputBox,
  TitleView,
  HabilitiesRow,
  FlexCol4,
} from '../../components/Global/styles';

import { FlexLabel, FixedInput, FinalValue } from './styles';

import {
  editHability,
  editRace,
  editAge,
  editName,
  selectSize,
} from '../../store/modules/profile/actions';

import { PickerSizes, findSize } from '../../services/Size/SizeServices';

import { PickerRaces, findRace } from '../../services/Races/RacesService';

export default function Habilities({ navigation }) {
  const dispatch = useDispatch();

  const habilities = useSelector(state => state.profile.habilities);
  const race = useSelector(state => state.profile.race);
  const age = useSelector(state => state.profile.age);
  const name = useSelector(state => state.profile.name);
  const size = useSelector(state => state.profile.size);

  function handleHabilityChange({ nativeEvent: { text } }, item) {
    dispatch(editHability(item.name, Number(text)));
  }

  function handleRace(raceName) {
    const mainRace = findRace(raceName);
    dispatch(editRace(mainRace));
  }

  function handleSize(sizeId) {
    const mainSize = findSize(sizeId);
    dispatch(selectSize(mainSize));
  }

  function handleAge(ageP) {
    dispatch(editAge(ageP));
  }

  function handleName(nameP) {
    dispatch(editName(nameP));
  }

  return (
    <Container>
      <ScrollView>
        <Section>
          <Section>
            <Row>
              <FlexCol4>
                <Label>Nome </Label>
                <InputBox
                  value={name}
                  editable
                  onChangeText={nameP => handleName(nameP)}
                />
              </FlexCol4>
              <FlexCol4>
                <Label>Idade</Label>
                <InputBox
                  value={age}
                  editable
                  onChangeText={ageP => handleAge(ageP)}
                  keyboardType="numeric"
                />
              </FlexCol4>
            </Row>
          </Section>
          <Row
            style={{
              justifyContent: 'center',
            }}>
            <FlexCol4>
              <Label>Tamanho</Label>
              <PickerView>
                <Picker
                  prompt="Defina o tamanho de seu personagem"
                  selectedValue={size.id}
                  onValueChange={handleSize}>
                  {PickerSizes}
                </Picker>
              </PickerView>
            </FlexCol4>
            <FlexCol4>
              <Label>Raça</Label>
              <PickerView>
                <Picker
                  prompt="Defina uma raça"
                  selectedValue={race.name}
                  onValueChange={handleRace}>
                  {PickerRaces}
                </Picker>
              </PickerView>
            </FlexCol4>
          </Row>
        </Section>

        <HandleLevel />

        <HabilitiesRow style={{ height: 50 }}>
          <Title>Habilidade</Title>
          <Title>Val. Inicial</Title>
          <TitleView style={{ alignItems: 'center' }}>
            <TouchableHighlight
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('Raça')}>
              <>
                <FinalValue style={{ marginRight: 5 }}>Val. Final</FinalValue>
                <Icon name="help-outline" size={16} color="#ed9a79" />
              </>
            </TouchableHighlight>
          </TitleView>
          <Title>Mod. </Title>
        </HabilitiesRow>

        {habilities.map(item => {
          return (
            <HabilitiesRow key={item.id}>
              <FlexLabel numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </FlexLabel>
              <FixedInput
                editable
                onChange={e => handleHabilityChange(e, item)}
                keyboardType="numeric">
                {item.initialValue}
              </FixedInput>
              <FixedInput editable={false}>{item.finalValue}</FixedInput>
              <FixedInput editable={false}>{item.mod}</FixedInput>
            </HabilitiesRow>
          );
        })}
        <TouchableHighlight onPress={() => navigation.navigate('Classes')}>
          <TitleView>
            <Title>Classes</Title>
          </TitleView>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Níveis')}>
          <TitleView>
            <Title>Níveis</Title>
          </TitleView>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Resistências')}>
          <TitleView>
            <Title>Resistências</Title>
          </TitleView>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => navigation.navigate('Combate')}>
          <TitleView>
            <Title>Combate</Title>
          </TitleView>
        </TouchableHighlight>
      </ScrollView>
    </Container>
  );
}
