// src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUserLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3333/login', {
        username: userName,
        password : password,
      });

      const token = response.data.token;
      const name = response.data.user.name;

      const verifyToken= await fetch('http://localhost:3333/verifyToken', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (verifyToken.ok) {
        onLogin(token, name);
      } else {
        setError('Login authentication failed');
      }
    } catch (error) {
      setError('Login failed - invalid username or password');
    }
  };


  return (
    <div className="mt-4 form-wrapper container">
    <h3>Login</h3>
      <form onSubmit={handleUserLogin}>
        {error && <p className="text-danger mb-2">{error}</p>}
        <input
          className="form-control"
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          className="form-control mt-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="mt-3 btn btn-primary" type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
