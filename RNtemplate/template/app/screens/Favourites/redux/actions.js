import { SET_FAVOURITES_SCREEN_TITLE } from './types';

export const setFavouritesScreenTitle = title => {
  return {
    type: SET_FAVOURITES_SCREEN_TITLE,
    data: title,
  };
};
