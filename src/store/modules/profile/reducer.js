import produce from 'immer';
import { checkModificator } from '../../../services/Habilities/HabilitiesService';
import { findBBA } from '../../../services/Classes/ClassesService';

const INITIAL_STATE = {
  name: null,
  age: null,
  level: { value: 0, experiencePoints: 0, useXP: true },
  race: [{ name: null, info: null }],
  classes: [{ id: 0, name: '', level: 0, type: '' }],
  lifePoints: {
    total: 0,
    classLifePoints: 0,
    constitutiontLifePoints: 0,
  },
  resistances: {
    fortitude: {
      id: 0,
      total: 0,
      half_level: 0,
      hability: 0,
      class: 0,
      other: 0,
      habilityName: 'Constituição',
    },

    reaction: {
      id: 1,
      total: 0,
      half_level: 0,
      hability: 0,
      class: 0,
      other: 0,
      habilityName: 'Destreza',
    },
    will: {
      id: 2,
      total: 0,
      half_level: 0,
      hability: 0,
      class: 0,
      other: 0,
      habilityName: 'Sabedoria',
    },
  },

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
      const constitutiontModificator = draft.habilities[2].mod;
      const profileLevel = draft.level.value;
      const initialClass = draft.classes[0];
      const classPointsForEachLevel = Object.values(draft.classes).reduce(
        (x, y) => x + y.lifePointsEachLevel * y.level,
        0,
      );

      draft.lifePoints.total =
        initialClass.initialLifePoints +
        classPointsForEachLevel +
        constitutiontModificator * profileLevel -
        initialClass.lifePointsEachLevel;

      draft.lifePoints.classLifePoints =
        initialClass.initialLifePoints +
        classPointsForEachLevel -
        initialClass.lifePointsEachLevel;

      draft.lifePoints.constitutiontLifePoints =
        constitutiontModificator * profileLevel;
    }

    function calcBBA(mainClass) {
      const bba = findBBA(mainClass);

      let bonusC = 0;

      if (mainClass.level) {
        const { bonus } = bba.filter(c => c.level === mainClass.level)[0];
        bonusC = bonus;
      }

      mainClass.bba = bonusC;

      draft.bba = Object.values(draft.classes).reduce((x, y) => x + y.bba, 0);
    }

    function calcResistances() {
      function getHabilityModificator(name) {
        const index = draft.habilities.findIndex(p => p.name === name);
        const hability = draft.habilities[index];
        return hability.mod;
      }

      const halfLevelValue = Math.trunc(draft.level.value / 2);

      draft.resistances.fortitude.half_level = halfLevelValue;

      Object.values(draft.resistances).forEach(item => {
        item.hability = getHabilityModificator(item.habilityName);
        item.half_level = halfLevelValue;
        item.total = item.half_level + item.hability + item.class + item.other;
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
          if (element === true) {
            return true;
          }
          return false;
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

        const index = draft.classes.findIndex(c => c.id === id);
        const mainClass = draft.classes[index];

        if (mainClass.id === 0) {
          mainClass.initialLifePoints = initialLifePoints;
        }

        mainClass.name = name;
        mainClass.lifePointsEachLevel = lifePointsEachLevel;
        mainClass.trainedExpertise = trainedExpertise;

        calcBBA(mainClass);
        calcLifePoints();
        calcResistances();

        break;
      }

      case '@class/LEVEL_EDIT': {
        const { id, level } = action;

        const index = draft.classes.findIndex(c => c.id === id);
        const mainClass = draft.classes[index];

        mainClass.level = level;

        calcBBA(mainClass);
        calcLifePoints();
        calcResistances();

        break;
      }

      case '@class/DELETE': {
        const { id } = action;

        const index = draft.classes.findIndex(c => c.id === id);
        const mainClass = draft.classes[index];

        // torna o nível null para que haja o recalculo correto do BBA
        if (mainClass.level) {
          mainClass.level = null;
          calcBBA(mainClass);
        }

        draft.classes.splice(index, 1);
        calcLifePoints();
        calcResistances();
        break;
      }
      default:
    }
  });
}
