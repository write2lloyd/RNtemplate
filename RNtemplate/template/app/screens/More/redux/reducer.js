import { SET_MORE_SCREEN_TITLE } from './types';

const initialState = {
  moreTitleData: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MORE_SCREEN_TITLE: {
      return {
        ...state,
        moreTitleData: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
