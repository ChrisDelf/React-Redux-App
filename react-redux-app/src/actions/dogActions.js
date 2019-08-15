import axios from 'axios';

export const FETCH_DOG_DATA_START = 'FETCH_FOX_DATA_START';
export const FETCH_DOG_DATA_SUCCESS = 'FETCH_FOX_DATA_SUCCESS';
export const FETCH_DOG_DATA_FAILURE = 'FETCH_FOX_DATA_FAILURE';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export const getData = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_DOG_DATA_START' });
    axios
      .get(`https://random.dog/woof.json`)
      .then(res => {
        console.log("Response", res.data)
        dispatch({ type: FETCH_DOG_DATA_SUCCESS, payload: res.data.url });
      })
      .catch(err => {
        dispatch({type: FETCH_DOG_DATA_FAILURE, payload: err.response})
      });
  };
};
