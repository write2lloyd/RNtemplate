import { SET_ANNOUNCEMENTS_SCREEN_TITLE } from './types';

const initialState = {
  announcementsTitleData: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ANNOUNCEMENTS_SCREEN_TITLE: {
      return {
        ...state,
        announcementsTitleData: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
