import { FETCH_PETS_REQUEST, FETCH_PETS_SUCCESS, FETCH_PETS_FAILURE } from '../actions/petActions';

const initialState = {
  pets: [],
  loading: false,
  error: ''
};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PETS_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case FETCH_PETS_SUCCESS:
      return {
        ...state,
        pets: action.payload,
        loading: false,
        error: ''
      };
    case FETCH_PETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default petReducer;