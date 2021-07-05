import React from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

import { getData } from '../actions';
import Dog from './Dog';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SavedDogs from './SavedDogs';
const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: 'lightblue'
  }
}));
const DogList = props => {
  const classes = useStyles();
  console.log('Props', props.images);
  return (
    <>
      <h1>Click here for some Doggos</h1>
      <Button className={classes.button} onClick={props.getData}>
        {props.isLoading ? (
          <ReactLoading type="cubes" color="green" />
        ) : (
          'Get some Doggo Images'
        )}
      </Button>
      {props.initialImage &&
        props.images.map(dog => <Dog key={dog.url} image={dog} />)}

    {props.addedDogs.map(link => (<SavedDogs key = {link} savedDog = {link}/>

        ))}

    </>
  );
};
const mapToProps = state => {
  return {
    isLoading: state.isLoading,
    images: [state.images],
    initialImage: state.initialImage,
    addedDogs: state.addedDogs
  };
};

export default connect(
  mapToProps,
  { getData }
)(DogList);
