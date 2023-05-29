import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <h1>Welcome to Pet Shelter</h1>
      <p>Find your new furry friend today!</p>
      <Link to="/cats" className="btn btn-primary">View Available Cats</Link>
    </div>
  );
}

export default Home;