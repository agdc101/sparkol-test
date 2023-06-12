// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LoginForm from './components/LoginForm';
import UserWelcome from './components/UserWelcome';
import LogoutButton from './components/LogoutButton';

const App = () => {
  const [jwt, setJwt] = useState('');
  const [name, setName] = useState('');

  const loginHandler = (token) => {
    setJwt(token);
  };

  const logoutHandler = () => {
    setJwt('');
  };

  return (
    <div>
      {jwt ? (
        <>
          <UserWelcome user={name} />
          <LogoutButton onLogout={logoutHandler} />
        </>
      ) : (
        <LoginForm onLogin={loginHandler} />
      )}
    </div>
  );
};

export default App;
