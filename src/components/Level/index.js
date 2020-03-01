import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CheckBox from '@react-native-community/checkbox';

import LevelSelector from './LevelSelector/index';

import { editLevel, editUseXP } from '../../store/modules/profile/actions';

import { calcLevel, calcXP } from '../../services/Levels/LevelsService';

import { Row, Section, Label, InputBox } from '../Global/styles';

export default function HandleLevel() {
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
          color="#823b38a8"
          style={{
            opacity: !useXP ? 1 : 0.5,
          }}
          editableStyle={!useXP}
          value={String(level.value)}
          functionMinus={handleSubLevel}
          functionPlus={handleSumLevel}
        />
      </Row>
    </Section>
  );
}
