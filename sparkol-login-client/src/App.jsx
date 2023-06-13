// src/App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { AppProvider } from './context/LogoutContext';
import LoginForm from './components/LoginForm';
import UserWelcome from './components/UserWelcome';
import LogoutButton from './components/LogoutButton';

const App = () => {
  const [jwt, setJwt] = useState('');
  const [name, setName] = useState('');

  const loginHandler = (token, name) => {
      setJwt(token);
      setName(name);
  };

  const logoutHandler = () => {
    setJwt('');
  };

  return (
    <AppProvider>
      {jwt ? (
        <>
          <UserWelcome user={name} />
          <LogoutButton onLogout={logoutHandler} />
        </>
      ) : (
        <LoginForm onLogin={loginHandler} />
      )}
    </AppProvider>
  );
};

export default App;
