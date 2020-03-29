// TODO: Implementar modificadores de tamanho. Conforme explicado em
// https://tsrd.fandom.com/pt-br/wiki/Combate na seção "Tamanho de Criaturas"

// TODO: Implementar Classes de Prestígio

import produce from 'immer';
import { checkModificator } from '../../../services/Habilities/HabilitiesService';
import {
  getAllBBAForClass,
  filterLevelBBA,
} from '../../../services/Classes/ClassesService';

const INITIAL_STATE = {
  name: null,
  age: null,
  size: {
    id: 0,
    name: null,
    combatBonus: 0,
    stealthBonus: 0,
  },
  level: { value: 0, experiencePoints: 0, useXP: true },
  race: { name: null, info: null },
  classes: [
    {
      id: 0,
      name: '',
      level: 0,
      type: '',
      initialLifePoints: 0,
      lifePointsEachLevel: 0,
      trainedExpertise: 0,
      bba: 0,
    },
  ],
  combat: {
    damageReduction: 0,
    actionPoints: 0,
    basicAttacks: {
      melee: {
        total: 0,
        bba: 0,
        habilities: 0,
        size: 0,
        other: 0,
      },
      range: {
        total: 0,
        bba: 0,
        habilities: 0,
        size: 0,
        other: 0,
      },
    },
    armorClass: {
      total: 0,
      base: 0,
      halfLevel: 0,
      reaction: 0,
      armor: 0,
      modificator: 0,
      size: 0,
      others: 0,
    },
  },
  lifePoints: {
    total: 0,
    epic: 0,
    other: 0,
    classLifePoints: 0,
    constitutiontLifePoints: 0,
  },
  resistances: [
    {
      name: 'fortitude',
      id: 0,
      total: 0,
      half_level: 0,
      hability: 0,
      class: 0,
      other: 0,
      habilityName: 'Constituição',
    },
    {
      name: 'reaction',
      id: 1,
      total: 0,
      half_level: 0,
      hability: 0,
      class: 0,
      other: 0,
      habilityName: 'Destreza',
    },
    {
      id: 2,
      name: 'will',
      total: 0,
      half_level: 0,
      hability: 0,
      class: 0,
      other: 0,
      habilityName: 'Sabedoria',
    },
  ],
  bba: 0,
  habilities: [
    {
      id: 0,
      name: 'Força',
      initialValue: 0,
      finalValue: 0,
      mod: -5,
      levelMod: [
        {
          level: 2,
          value: 0,
        },
      ],
      modificators: {
        raceMod: 0,
        ageMod: 0,
        levelMod: 0,
        modelMod: 0,
        othersMod: 0,
      },
    },
    {
      id: 1,
      name: 'Destreza',
      initialValue: 0,
      finalValue: 0,
      mod: -5,
      levelMod: [
        {
          level: 2,
          value: 0,
        },
      ],
      modificators: {
        raceMod: 0,
        ageMod: 0,
        levelMod: 0,
        modelMod: 0,
        othersMod: 0,
      },
    },
    {
      id: 2,
      name: 'Constituição',
      initialValue: 0,
      finalValue: 0,
      mod: -5,
      levelMod: [
        {
          level: 2,
          value: 0,
        },
      ],
      modificators: {
        raceMod: 0,
        ageMod: 0,
        levelMod: 0,
        modelMod: 0,
        othersMod: 0,
      },
    },
    {
      id: 3,
      name: 'Inteligência',
      initialValue: 0,
      finalValue: 0,
      mod: -5,
      levelMod: [
        {
          level: 2,
          value: 0,
        },
      ],
      modificators: {
        raceMod: 0,
        ageMod: 0,
        levelMod: 0,
        modelMod: 0,
        othersMod: 0,
      },
    },
    {
      id: 4,
      name: 'Sabedoria',
      initialValue: 0,
      finalValue: 0,
      mod: -5,
      levelMod: [
        {
          level: 2,
          value: 0,
        },
      ],
      modificators: {
        raceMod: 0,
        ageMod: 0,
        levelMod: 0,
        modelMod: 0,
        othersMod: 0,
      },
    },
    {
      id: 5,
      name: 'Carisma',
      initialValue: 0,
      finalValue: 0,
      mod: -5,
      levelMod: [
        {
          level: 2,
          value: 0,
        },
      ],
      modificators: {
        raceMod: 0,
        ageMod: 0,
        levelMod: 0,
        modelMod: 0,
        othersMod: 0,
      },
    },
  ],
};

export default function editProfile(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    function calcLifePoints() {
      const index = draft.habilities.findIndex(
        item => item.name === 'Constituição',
      );

      const constitutiontModificator = draft.habilities[index].mod;
      const profileLevel = draft.level.value;
      const initialClass = draft.classes[0];
      const otherLifePoints = draft.lifePoints.other;
      const lifePointsEachClassLevel = Object.values(draft.classes).reduce(
        (x, y) => x + y.lifePointsEachLevel * y.level,
        0,
      );
      const levelLifePoints =
        initialClass.initialLifePoints +
        lifePointsEachClassLevel -
        initialClass.lifePointsEachLevel;

      draft.lifePoints.total =
        levelLifePoints +
        otherLifePoints +
        constitutiontModificator * profileLevel;

      draft.lifePoints.classLifePoints = levelLifePoints;

      draft.lifePoints.constitutiontLifePoints =
        constitutiontModificator * profileLevel;
    }

    function calcBBA(caracterClass) {
      const bba = getAllBBAForClass(caracterClass);

      const bonus = filterLevelBBA(bba, caracterClass.level);

      caracterClass.bba = bonus;

      draft.bba = Object.values(draft.classes).reduce((x, y) => x + y.bba, 0);
    }

    function getHabilityModificator(name) {
      const index = draft.habilities.findIndex(p => p.name === name);
      const hability = draft.habilities[index];
      return hability.mod;
    }
    function calcResistances() {
      const halfLevelValue = Math.trunc(draft.level.value / 2);

      draft.resistances.forEach(item => {
        item.hability = getHabilityModificator(item.habilityName);
        item.half_level = halfLevelValue;
        item.total = item.half_level + item.hability + item.class + item.other;
      });
    }

    function calcBasicAttacks() {
      const { melee, range } = draft.combat.basicAttacks;

      melee.habilities = getHabilityModificator('Força');
      range.habilities = getHabilityModificator('Destreza');

      const { basicAttacks } = draft.combat;

      Object.values(basicAttacks).forEach(item => {
        item.size = draft.size.combatBonus;
        item.bba = draft.bba;
        item.total = item.bba + item.habilities + item.size + item.other;
      });
    }

    switch (action.type) {
      case '@hability/EDIT': {
        const { name, value } = action;

        const habilityIndex = draft.habilities.findIndex(p => p.name === name);

        const hability = draft.habilities[habilityIndex];

        const totalValue =
          value +
          Object.values(hability.modificators).reduce((x, y) => x + y, 0);

        const modificator = checkModificator(totalValue);

        hability.initialValue = value;
        hability.mod = modificator;
        hability.finalValue = totalValue;

        calcLifePoints();
        calcResistances();
        calcBasicAttacks();
        break;
      }

      case '@otherMod/EDIT': {
        const { id, value } = action;

        const habIndex = draft.habilities.findIndex(p => p.id === id);
        const hability = draft.habilities[habIndex];

        hability.modificators.othersMod = value;

        const totalValue =
          hability.initialValue +
          Object.values(hability.modificators).reduce((x, y) => x + y, 0);

        const modificator = checkModificator(totalValue);

        hability.finalValue = totalValue;
        hability.mod = modificator;

        calcLifePoints();
        calcResistances();
        calcBasicAttacks();
        break;
      }

      case '@levelMod/EDIT': {
        const { id, inputLevel } = action;
        const habIndex = draft.habilities.findIndex(p => p.id === id);
        const hability = draft.habilities[habIndex];

        const { habilities } = draft;

        const createIndex = [];

        Object.values(habilities).forEach(e => {
          if (id !== e.id) {
            e.levelMod.forEach(mod => {
              if (mod.level === inputLevel) {
                // nível já definido porém em outra habilitdade
                // remove objeto duplicado
                const index = e.levelMod.findIndex(p => p === mod);
                habilities[e.id].levelMod.splice(index, 1);
              }
            });
          } else if (id === e.id) {
            // habilidade enviada encontrada
            if (e.levelMod !== []) {
              //  se objeto já existe...
              e.levelMod.forEach(mod => {
                if (mod.level === inputLevel) {
                  // se o nível definido for o mesmo. Permanece com o valor atual
                  mod.level = inputLevel;
                  mod.value = 1;
                  createIndex.push(false);
                } else {
                  // se não possui nível, irá criar o elemento posteriormente
                  createIndex.push(true);
                }
              });
            } else {
              // Se o elemento está vazio, cria o mesmo
              e.levelMod.push({
                level: inputLevel,
                value: 1,
              });
            }
          }
        });

        const checkValue = element => {
          return !!element;
        };

        if (createIndex.every(checkValue)) {
          hability.levelMod.push({
            level: inputLevel,
            value: 1,
          });
        }

        Object.values(habilities).forEach(element => {
          element.modificators.levelMod = element.levelMod.reduce(
            (x, y) => x + y.value,
            0,
          );
          const totalValue =
            element.initialValue +
            Object.values(element.modificators).reduce((x, y) => x + y, 0);

          const modificator = checkModificator(totalValue);

          element.mod = modificator;
          element.finalValue = totalValue;
        });

        calcLifePoints();
        calcResistances();
        calcBasicAttacks();
        break;
      }

      case '@race/EDIT': {
        const { race } = action;

        draft.race = {
          name: race.value,
          info: race.racialInfo,
        };

        const { habilities } = draft;

        Object.values(habilities).forEach((element, i) => {
          element.modificators.raceMod = race.habilities[i].value;

          const totalValue =
            element.initialValue +
            Object.values(element.modificators).reduce((x, y) => x + y, 0);

          const modificator = checkModificator(totalValue);

          element.mod = modificator;
          element.finalValue = totalValue;
        });

        calcLifePoints();
        calcResistances();
        calcBasicAttacks();
        break;
      }

      case '@age/EDIT': {
        const { age } = action;

        draft.age = age;
        break;
      }

      case '@level/EDIT': {
        const { level, xp } = action;

        draft.level = {
          value: level,
          experiencePoints: xp,
        };

        calcLifePoints();
        calcResistances();
        calcBasicAttacks();

        break;
      }

      case '@level/OtherFieldEdit': {
        const { value } = action;

        draft.lifePoints.other = value;

        calcLifePoints();
        break;
      }

      case '@level/USEXP': {
        const { value } = action;

        draft.level.useXP = value;
        break;
      }

      case '@name/EDIT': {
        const { name } = action;

        draft.name = name;

        break;
      }

      case '@class/CREATE': {
        const { id } = draft.classes.slice(-1).pop();

        draft.classes.push({ id: id + 1, name: '', level: 0, type: '' });
        break;
      }

      case '@class/EDIT': {
        const {
          id,
          name,
          initialLifePoints,
          lifePointsEachLevel,
          trainedExpertise,
        } = action;

        const index = draft.classes.findIndex(item => item.id === id);
        const caracterClass = draft.classes[index];

        if (caracterClass.id === 0) {
          caracterClass.initialLifePoints = initialLifePoints;
        }

        caracterClass.name = name;
        caracterClass.lifePointsEachLevel = lifePointsEachLevel;
        caracterClass.trainedExpertise = trainedExpertise;

        calcBBA(caracterClass);
        calcLifePoints();
        calcResistances();
        calcBasicAttacks();

        break;
      }

      case '@class/LEVEL_EDIT': {
        const { id, level } = action;

        const index = draft.classes.findIndex(item => item.id === id);
        const caracterClass = draft.classes[index];

        caracterClass.level = level;

        calcBBA(caracterClass);
        calcLifePoints();
        calcResistances();
        calcBasicAttacks();

        break;
      }

      case '@class/DELETE': {
        const { id } = action;

        const index = draft.classes.findIndex(item => item.id === id);

        draft.classes.splice(index, 1);
        draft.bba = Object.values(draft.classes).reduce((x, y) => x + y.bba, 0);

        calcLifePoints();
        calcResistances();
        calcBasicAttacks();

        break;
      }

      case '@resistence/EDIT_OTHER': {
        const { id, value } = action;

        const index = draft.resistances.findIndex(item => item.id === id);

        const resistance = draft.resistances[index];

        resistance.other = value;

        calcResistances();
        calcBasicAttacks();
        break;
      }

      case '@combat/EDIT_DAMAGE_REDUCTION': {
        const { value } = action;

        draft.combat.damageReduction = value;

        break;
      }

      case '@combat/EDIT_ACTION_POINTS': {
        const { value } = action;

        draft.combat.actionPoints = value;

        break;
      }
      case '@combat/EDIT_MELEE': {
        const { value } = action;

        draft.combat.basicAttacks.melee.other = value;

        calcBasicAttacks();
        break;
      }
      case '@combat/EDIT_RANGE': {
        const { value } = action;

        draft.combat.basicAttacks.range.other = value;
        calcBasicAttacks();
        break;
      }

      case '@size/SELECT': {
        const { size } = action;

        draft.size = size;
        calcBasicAttacks();
        break;
      }
      default:
    }
  });
}
