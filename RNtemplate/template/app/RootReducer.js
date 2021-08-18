import { combineReducers } from 'redux';
import AnnouncementsReducer from './screens/Announcements/redux/reducer';
import FavouritesReducer from './screens/Favourites/redux/reducer';
import HomeReducer from './screens/Home/redux/reducer';
import MoreReducer from './screens/More/redux/reducer';

const appReducer = combineReducers({
  AnnouncementsReducer,
  FavouritesReducer,
  HomeReducer,
  MoreReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
