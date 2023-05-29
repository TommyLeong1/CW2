import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPets } from '../actions/petActions';
import PetListItem from './PetListItem';

const PetList = () => {
  const pets = useSelector(state => state.petReducer.pets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return (
    <div>
      <h2>Pets</h2>
      <ul>
        {pets.map(pet => (
          <PetListItem key={pet._id} pet={pet} />
        ))}
      </ul>
    </div>
  );
};

export default PetList;