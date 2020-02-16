import LevelsModel from './model.levels';

export const calcLevel = xp => {
  return LevelsModel.filter(
    (element, i, array) =>
      xp >= element.experiencePoints && xp < array[i + 1].experiencePoints,
  )[0];
};

export const calcXP = level => {
  return LevelsModel.filter(element => element.level === level)[0];
};

export const getEvenLevels = () => {
  return LevelsModel.filter(element => element.level % 2 === 0);
};
