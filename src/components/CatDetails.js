import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './CatDetails.css';

function CatDetails() {
  const { id } = useParams();
  const [cat, setCat] = useState(null);

  useEffect(() => {
    axios.get(`/api/cats/${id}`)
      .then(res => setCat(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!cat) {
    return <div>Loading...</div>;
  }

  return (
    <div className="CatDetails">
      <h1>{cat.name}</h1>
      <div className="row">
        <div className="col-md-6">
          {cat.photo && <img src={cat.photo} alt={cat.name} className="img-fluid" />}
        </div>
        <div className="col-md-6">
          <ul>
            <li><strong>Breed:</strong> {cat.breed}</li>
            <li><strong>Gender:</strong> {cat.gender}</li>
            <li><strong>Age:</strong> {cat.age}</li>
            <li><strong>Color:</strong> {cat.color}</li>
            <li><strong>Description:</strong> {cat.description}</li>
            <li><strong>Location:</strong> {cat.location.name}</li>
          </ul>
          <Link to={`/cats/edit/${cat._id}`} className="btn btn-primary">Edit</Link>
        </div>
      </div>
      <div>
        <Link to="/cats" className="btn btn-secondary">Back to List</Link>
      </div>
    </div >
  );
}

export default CatDetails;