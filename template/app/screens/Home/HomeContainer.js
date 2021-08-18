import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setHomeScreenTitle } from './redux/actions';
import { setFavouritesScreenTitle } from '../Favourites/redux/actions';
import { setAnnouncementsScreenTitle } from '../Announcements/redux/actions';
import { setMoreScreenTitle } from '../More/redux/actions';
import HomeView from './HomeView';

const HomeContainer = props => {
  useEffect(() => {
    const setTitle = () => {
      props.setHomeScreenTitle('Home Screen');
      props.setFavouritesScreenTitle('Favourites Screen');
      props.setAnnouncementsScreenTitle('Announcements Screen');
      props.setMoreScreenTitle('More Options Screen');
    };
    setTitle();
  }, [props]);

  return <HomeView title={props.homeTitleData} />;
};

const mapStateToProps = state => {
  const { HomeReducer } = state;
  return {
    homeTitleData: HomeReducer.homeTitleData,
  };
};

const mapDispatchToProps = {
  setHomeScreenTitle,
  setFavouritesScreenTitle,
  setAnnouncementsScreenTitle,
  setMoreScreenTitle,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
