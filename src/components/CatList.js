import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CatList.css';

function CatList() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios.get('/api/cats')
      .then(res => setCats(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="CatList">
      <h1>Available Cats</h1>
      <ul>
        {cats.map(cat => (
          <li key={cat._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{cat.name}</h5>
                <p className="card-text">{cat.breed}</p>
                <p className="card-text">{cat.gender} - {cat.age} years old</p>
                <Link to={`/cats/${cat._id}`} className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/cats/add" className="btn btn-primary">Add a Cat</Link>
    </div>
  );
}

export default CatList;