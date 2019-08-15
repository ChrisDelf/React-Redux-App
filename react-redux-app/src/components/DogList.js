import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

import { getData } from '../actions';
import Dog from './Dog';

const DogList = props => {
  console.log('Props', props.images);
  return (
    <>
      <h1>Click here for some foxes</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <ReactLoading type="cubes" color="green" />
        ) : (
          'Get some Doggo Images'
        )}
      </button>
      {props.images &&
        props.images.map(dog => <Dog key={dog.url} image={dog} />)}
    </>
  );
};
const mapToProps = state => {
  return {
    isLoading: state.isLoading,
    images: [state.images]
  };
};

export default connect(
  mapToProps,
  { getData }
)(DogList);
