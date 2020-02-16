import React, { useState } from 'react';
import { TouchableHighlight, ScrollView, Modal, Alert } from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Row,
  Section,
  Title,
  Label,
  Picker,
  PickerView,
  InputBox,
} from '../../components/Global/styles';

import {
  FlexLabel,
  FixedInput,
  TitleView,
  FinalValue,
  HabilitiesRow,
  LvlHabButton,
  ButtonContent,
  ModalContainer,
  ModalContent,
  RadioButtonContainer,
  TouchableOpacity,
  CheckedCircle,
  RadioOptionsContainer,
} from './styles';

import {
  editHability,
  editRace,
  editAge,
  editLevel,
  editName,
  editLevelMod,
} from '../../store/modules/profile/actions';

import { PickerRaces, findRace } from '../../services/Races/RacesService';
import { calcLevel, calcXP } from '../../services/Levels/LevelsService';
import HabilitiesModel from '../../services/Habilities/model.habilities';

export default function Habilities({ navigation }) {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState([]);
  const [useXP, setUseXP] = useState(true);

  const habilities = useSelector(state => state.profile.habilities);
  const race = useSelector(state => state.profile.race);
  const age = useSelector(state => state.profile.age);
  const level = useSelector(state => state.profile.level);
  const name = useSelector(state => state.profile.name);

  function handleHabilityChange({ nativeEvent: { text } }, item) {
    dispatch(editHability(item.name, Number(text)));
  }

  function handleRace(raceName) {
    const mainRace = findRace(raceName);
    dispatch(editRace(mainRace));
  }

  function handleAge(ageP) {
    dispatch(editAge(ageP));
  }
  function handleXP(xp) {
    const result = calcLevel(Number(xp));
    dispatch(editLevel(result.level, xp));
  }

  function handleLevel(levelP) {
    const { experiencePoints } = calcXP(Number(levelP));
    dispatch(editLevel(levelP, experiencePoints));
  }

  function handleName(nameP) {
    dispatch(editName(nameP));
  }

  function handleLevelHability(HabId) {
    if (level.value >= selectedLevel) {
      dispatch(
        editLevelMod({
          id: HabId,
          level: selectedLevel,
        }),
      );
    } else {
      Alert.alert(
        `Você ainda não atingiu ou não informou este nível na ficha!`,
      );
      setModalVisible(false);
    }
  }

  function openLevelModal(lvl) {
    setSelectedLevel(lvl);
    setModalVisible(true);
  }

  function LvlModal() {
    function checkValue(item) {
      const index = habilities.findIndex(h => h.id === item);
      const hability = habilities[index];

      const modIndex = hability.levelMod.findIndex(
        m => m.level === selectedLevel && m.value > 0,
      );
      const modExists = hability.levelMod[modIndex];

      if (modExists) {
        return <CheckedCircle />;
      }

      return false;
    }

    return (
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <ModalContainer>
          <ModalContent>
            <TitleView>
              <Title>
                Bônus acrescentado ao atingir o Nível {selectedLevel}
              </Title>
            </TitleView>
            <RadioOptionsContainer>
              {HabilitiesModel.map(item => {
                return (
                  <RadioButtonContainer key={item.id}>
                    <ButtonContent>{item.name}</ButtonContent>
                    <TouchableOpacity
                      onPress={() => handleLevelHability(item.id)}>
                      {checkValue(item.id)}
                    </TouchableOpacity>
                  </RadioButtonContainer>
                );
              })}
            </RadioOptionsContainer>
          </ModalContent>
        </ModalContainer>
      </Modal>
    );
  }

  function LevelHabilityList() {
    const list = [];
    let cont = 2;
    while (cont <= 40) {
      list.push(cont);
      cont += 2;
    }

    return (
      <HabilitiesRow
        style={{
          flexWrap: 'wrap',
          marginTop: 20,
          marginBottom: 20,
        }}>
        <Title>Defina as habilidades que recebem +1 nos níveis pares</Title>

        {list.map(itemLevel => {
          return (
            <LvlHabButton
              key={String(itemLevel)}
              onPress={() => openLevelModal(itemLevel)}>
              <ButtonContent>Nível: {itemLevel}</ButtonContent>
            </LvlHabButton>
          );
        })}
      </HabilitiesRow>
    );
  }

  return (
    <Container>
      <ScrollView>
        <Section>
          <Row>
            <Label>Nome:</Label>
            <InputBox
              value={name}
              editable
              onChangeText={nameP => handleName(nameP)}
            />
            <Label>Idade:</Label>
            <InputBox
              value={age}
              editable
              onChangeText={ageP => handleAge(ageP)}
              keyboardType="numeric"
            />
          </Row>

          <Row
            style={{
              justifyContent: 'center',
            }}>
            <CheckBox
              value={useXP}
              onChange={() => setUseXP(!useXP)}
              tintColors={{ true: '#d8c203', false: '#444' }}
            />
            <Label>Utilizar XP?</Label>
          </Row>
          <Row>
            <Label>Pontos Experiência</Label>
            <InputBox
              editable={useXP}
              keyboard="numeric"
              onChangeText={xp => handleXP(xp)}
            />
            <Label>Nível:</Label>
            <InputBox
              editable={!useXP}
              value={String(level.value)}
              onChangeText={levelP => handleLevel(levelP)}
              keyboardType="numeric"
            />
          </Row>
          <Row>
            <Label>Raça:</Label>
            <PickerView>
              <Picker
                prompt="Defina uma raça"
                selectedValue={race.name}
                onValueChange={itemValue => handleRace(itemValue)}>
                {PickerRaces}
              </Picker>
            </PickerView>
          </Row>
        </Section>

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

        <LevelHabilityList />

        <LvlModal />
        <TouchableHighlight onPress={() => navigation.navigate('Classes')}>
          <TitleView>
            <Title>Classes</Title>
          </TitleView>
        </TouchableHighlight>
      </ScrollView>
    </Container>
  );
}
