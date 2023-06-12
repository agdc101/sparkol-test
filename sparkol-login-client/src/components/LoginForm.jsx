// src/components/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3333/login', {
        username : userName,
        password : password,
      });
      onLogin(response.data.token);
    } catch (error) {
      console.error('login failed:', error);
    }
  };

  return (
    <div class="mt-4 form-wrapper container">
    <h3>Login</h3>
      <form onSubmit={handleUserLogin}>
        <input
          class="form-control"
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          class="form-control mt-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button class="mt-3 btn btn-primary" type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
