import {
  ADD_DOG,
  FETCH_DOG_DATA_START,
  FETCH_DOG_DATA_SUCCESS,
  FETCH_DOG_DATA_FAILURE
} from '../actions';

const initialState = {
  images: [],
  initialImage: false,
  isLoading: false,
  error: '',
  addedDogs:[]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DOG_DATA_START:
      return {
        ...state,
        isLoading: true,
        initialImage: false,
        error: ''
      };
    case FETCH_DOG_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        images: action.payload,
        initialImage: true,
        error: ''
      };
    case FETCH_DOG_DATA_FAILURE:
      return{
        ...state,
          error: action.payload
      }
    case ADD_DOG:
      return{
        ...state,
        addedDogs: [...state.addedDogs , action.payload]
      }


    default:
      return state;
  }
};
