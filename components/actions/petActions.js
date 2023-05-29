import axios from 'axios';

export const FETCH_PETS_REQUEST = 'FETCH_PETS_REQUEST';
export const FETCH_PETS_SUCCESS = 'FETCH_PETS_SUCCESS';
export const FETCH_PETS_FAILURE = 'FETCH_PETS_FAILURE';

export const fetchPetsRequest = () => {
  return {
    type: FETCH_PETS_REQUEST
  };
};

export const fetchPetsSuccess = (pets) => {
  return {
    type: FETCH_PETS_SUCCESS,
    payload: pets
  };
};

export const fetchPetsFailure = (error) => {
  return {
    type: FETCH_PETS_FAILURE,
    payload: error
  };
};

export const fetchPets = () => {
  return (dispatch) => {
    dispatch(fetchPetsRequest());
    axios.get('/api/pets')
      .then(response => {
        const pets = response.data;
        dispatch(fetchPetsSuccess(pets));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(fetchPetsFailure(errorMessage))；
      });
  };
};
