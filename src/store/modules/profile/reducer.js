import produce from 'immer';
import { checkModificator } from '../../../services/DefaultHabilities';
import { DefaultClasses } from '../../../services/DefaultClasses';

const INITIAL_STATE = {
  name: null,
  age: null,
  level: '',
  race: [{ name: null, info: null }],
  classes: [{ id: 0, name: '', level: '', type: '' }],
  lifePoints: 0,
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
      const initialClass = draft.classes[0];
      draft.lifePoints =
        initialClass.initialLifePoints +
        Object.values(draft.classes).reduce(
          (x, y) => x + y.lifePointsEachLevel * y.level,
          0,
        ) -
        initialClass.lifePointsEachLevel;
    }

    function calcBBA(mainClass) {
      const { bba } = DefaultClasses[
        DefaultClasses.findIndex(c => c.value === mainClass.name)
      ];

      let bonusC = 0;

      if (mainClass.level) {
        const { bonus } = bba.filter(c => c.level === mainClass.level)[0];
        bonusC = bonus;
      }

      mainClass.bba = bonusC;

      draft.bba = Object.values(draft.classes).reduce((x, y) => x + y.bba, 0);
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

        break;
      }

      case '@age/EDIT': {
        const { age } = action;

        draft.age = age;
        break;
      }

      case '@level/EDIT': {
        const { level } = action;

        draft.level = level;

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

        break;
      }

      case '@class/LEVEL_EDIT': {
        const { id, level } = action;

        const index = draft.classes.findIndex(c => c.id === id);
        const mainClass = draft.classes[index];

        mainClass.level = level;

        calcBBA(mainClass);
        calcLifePoints();

        break;
      }

      case '@class/DELETE': {
        const { id } = action;

        const index = draft.classes.findIndex(c => c.id === id);
        const mainClass = draft.classes[index];

        if (mainClass.level) {
          mainClass.level = null;
          calcBBA(mainClass);
        }

        draft.classes.splice(index, 1);
        calcLifePoints();

        break;
      }
      default:
    }
  });
}
