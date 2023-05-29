import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/users/register', { name, email, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        history.push('/');
      })
      .catch(err => setError(err.response.data.message));
  };

  return (
    <div className="Register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" className="form-control" value={name} onChange={e => setName(e.target.value)} />

</div> <div className="form-group"> <label htmlFor="email">Email:</label> <input type="email" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} /> </div> <div className="form-group"> <label htmlFor="password">Password:</label> <input type="password" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} /> </div> {error && <div className="alert alert-danger">{error}</div>} <button type="submit" className="btn btn-primary">Register</button> </form> </div> ); }

export default Register;