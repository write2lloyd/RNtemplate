import { SET_FAVOURITES_SCREEN_TITLE } from './types';

const initialState = {
  favouritesTitleData: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVOURITES_SCREEN_TITLE: {
      return {
        ...state,
        favouritesTitleData: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
