import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/users/login', { email, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        history.push('/');
      })
      .catch(err => setError(err.response.data.message));
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary">文件夾: `client`

          文件名: `src/components/Login.js` (續)

          後綴名: 無

          ```javascript
          Login</button>
      </form>
    </div>
  );
}

export default Login;