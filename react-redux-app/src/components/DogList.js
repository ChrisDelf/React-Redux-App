import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

import {getData} from '../actions';

const DogList = props => {
  return (
    <>
      <h1>Click here for some foxes</h1>
      <button onClick = {props.getData}>
        <ReactLoading type="cubes" color="green" />
      </button>
    </>
  );
};
const mapToProps = state => {
  return {
    isLoading: state.isLoading,
    images: state.images
  };
};

export default connect(
  mapToProps,
  {getData}
)(DogList);
