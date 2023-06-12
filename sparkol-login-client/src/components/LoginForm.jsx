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
    <div class="form-wrapper">
      <form onSubmit={handleUserLogin}>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginForm;
