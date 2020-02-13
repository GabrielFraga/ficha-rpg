import LevelsModel from './model.levels';

export const calcLevel = xp => {
  return LevelsModel.filter((element, i, array) => {
    if (xp >= element.experiencePoints && xp < array[i + 1].experiencePoints) {
      return element.level;
    }

    return 0;
  })[0];
};
