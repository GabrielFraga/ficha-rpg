import React, { useState } from 'react';
import { Alert, Modal } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';

import LevelSelector from './LevelSelector/index';

import {
  editLevel,
  editLevelMod,
  editUseXP,
} from '../../store/modules/profile/actions';

import HabilitiesModel from '../../services/Habilities/model.habilities';
import {
  calcLevel,
  calcXP,
  getEvenLevels,
} from '../../services/Levels/LevelsService';

import {
  Row,
  Section,
  Title,
  Label,
  InputBox,
  TitleView,
  HabilitiesRow,
} from '../Global/styles';

import {
  LvlHabButton,
  ButtonContent,
  ModalContainer,
  ModalContent,
  RadioButtonContainer,
  RadioButton,
  CheckedCircle,
  RadioOptionsContainer,
} from './styles';

export function Level() {
  const dispatch = useDispatch();

  const level = useSelector(state => state.profile.level);
  const useXP = useSelector(state => state.profile.level.useXP);

  function handleUseXP(value) {
    dispatch(editUseXP(value));
  }

  function handleXP(xp) {
    if (xp) {
      const result = calcLevel(Number(xp));
      dispatch(editLevel(result.level, xp));
    } else {
      dispatch(editLevel(1, 0));
    }
  }

  function handleSubLevel() {
    if (!useXP) {
      const newLevel = level.value - 1;
      if (newLevel !== 0) {
        const { experiencePoints } = calcXP(newLevel);
        dispatch(editLevel(newLevel, experiencePoints));
      }
    }
  }
  function handleSumLevel() {
    if (!useXP) {
      const newLevel = level.value + 1;
      const { experiencePoints } = calcXP(newLevel);
      dispatch(editLevel(newLevel, experiencePoints));
    }
  }

  return (
    <Section>
      <Row
        style={{
          justifyContent: 'center',
        }}>
        <CheckBox
          value={useXP}
          onChange={() => handleUseXP(!useXP)}
          tintColors={{ true: '#d8c203', false: '#444' }}
        />
        <Label>Utilizar XP?</Label>
      </Row>
      <Row>
        <Label>Pontos Experiência</Label>
        <InputBox
          editable={useXP}
          keyboard="numeric"
          value={String(level.experiencePoints)}
          onChangeText={xp => handleXP(xp)}
        />
        <LevelSelector
          color={!useXP ? '#823b38a8' : '#b58886'}
          editableStyle={!useXP}
          value={String(level.value)}
          functionMinus={handleSubLevel}
          functionPlus={handleSumLevel}
        />
      </Row>
    </Section>
  );
}

export function HabilityLevelOptions() {
  const dispatch = useDispatch();

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState([]);
  const level = useSelector(state => state.profile.level);

  const habilities = useSelector(state => state.profile.habilities);

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
                    <RadioButton onPress={() => handleLevelHability(item.id)}>
                      {checkValue(item.id)}
                    </RadioButton>
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
    return (
      <HabilitiesRow
        style={{
          flexWrap: 'wrap',
          marginTop: 20,
          marginBottom: 20,
        }}>
        <Title>Defina as habilidades que recebem +1 nos níveis pares</Title>

        {getEvenLevels().map(itemLevel => {
          return (
            <LvlHabButton
              disabled={!(level.value >= itemLevel.level)}
              key={String(itemLevel.level)}
              onPress={() => openLevelModal(itemLevel.level)}>
              <ButtonContent>Nível: {itemLevel.level}</ButtonContent>
            </LvlHabButton>
          );
        })}
      </HabilitiesRow>
    );
  }

  return (
    <>
      <LevelHabilityList />
      <LvlModal />
    </>
  );
}
