import React from 'react';
import { connect } from 'react-redux';
import MoreView from './MoreView';

const MoreContainer = props => {
  return <MoreView title={props.moreTitleData} />;
};

const mapStateToProps = state => {
  const { MoreReducer } = state;
  return {
    moreTitleData: MoreReducer.moreTitleData,
  };
};

export default connect(mapStateToProps, null)(MoreContainer);
