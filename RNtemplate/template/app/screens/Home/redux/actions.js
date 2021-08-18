import { SET_HOME_SCREEN_TITLE } from './types';

export const setHomeScreenTitle = title => {
  return {
    type: SET_HOME_SCREEN_TITLE,
    data: title,
  };
};
