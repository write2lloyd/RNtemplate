import React from 'react';
import { connect } from 'react-redux';
import FavouritesView from './FavouritesView';

const FavouritesContainer = props => {
  return <FavouritesView title={props.favouritesTitleData} />;
};

const mapStateToProps = state => {
  const { FavouritesReducer } = state;
  return {
    favouritesTitleData: FavouritesReducer.favouritesTitleData,
  };
};

export default connect(mapStateToProps, null)(FavouritesContainer);
