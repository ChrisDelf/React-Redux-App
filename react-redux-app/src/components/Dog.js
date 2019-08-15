import React from 'react';
import { connect } from 'react-redux';

import { addDog } from '../actions/dogActions';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { lightBlue } from '@material-ui/core/colors';
import { maxHeight } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
    backgroundColor: 'lightBlue',
    height: 400
  },
  media: {
    height: 0,
    paddingTop: '60%'
  },
  button: {
    backgroundColor: 'orange'
  }
}));

const Dog = props => {
  const classes = useStyles();
  console.log('in DOg', props.image);
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={props.image}
        alt="image failed to load"
      />
      <Button
        className={classes.button}
        onClick={() => props.addDog(props.image)}
      >
        Add to Saved Doggos
      </Button>
    </Card>
  );
};

export default connect(
  null,
  { addDog }
)(Dog);
