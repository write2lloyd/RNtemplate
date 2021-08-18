import { SET_ANNOUNCEMENTS_SCREEN_TITLE } from './types';

export const setAnnouncementsScreenTitle = title => {
  return {
    type: SET_ANNOUNCEMENTS_SCREEN_TITLE,
    data: title,
  };
};
