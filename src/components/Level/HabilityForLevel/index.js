import React, { useState } from 'react';
import { Alert, Modal } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { editLevelMod } from '../../../store/modules/profile/actions';

import HabilitiesModel from '../../../services/Habilities/model.habilities';

import { getEvenLevels } from '../../../services/Levels/LevelsService';

import { Title, TitleView, HabilitiesRow } from '../../Global/styles';

import {
  LvlHabButton,
  ButtonContent,
  ModalContainer,
  ModalContent,
  RadioButtonContainer,
  RadioButton,
  CheckedCircle,
  RadioOptionsContainer,
} from '../styles';

export default function HabilityForLevel() {
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

  return (
    <>
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
      <LvlModal />
    </>
  );
}
