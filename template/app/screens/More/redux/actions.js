import { SET_MORE_SCREEN_TITLE } from './types';

export const setMoreScreenTitle = title => {
  return {
    type: SET_MORE_SCREEN_TITLE,
    data: title,
  };
};
