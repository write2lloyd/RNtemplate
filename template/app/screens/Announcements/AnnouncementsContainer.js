import React from 'react';
import { connect } from 'react-redux';
import AnnouncementsView from './AnnouncementsView';

const AnnouncementsContainer = props => {
  return <AnnouncementsView title={props.announcementsTitleData} />;
};

const mapStateToProps = state => {
  const { AnnouncementsReducer } = state;
  return {
    announcementsTitleData: AnnouncementsReducer.announcementsTitleData,
  };
};

export default connect(mapStateToProps, null)(AnnouncementsContainer);
