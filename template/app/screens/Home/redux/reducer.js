import { SET_HOME_SCREEN_TITLE } from './types';

const initialState = {
  homeTitleData: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME_SCREEN_TITLE: {
      return {
        ...state,
        homeTitleData: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
