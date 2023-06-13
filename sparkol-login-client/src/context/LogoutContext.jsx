import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [logoutMessage, setLogoutMessage] = useState('');

  const handleLogoutMessage = () => {
    setLogoutMessage('Logout successful');
  };

  const resetLogoutMessage = () => {
    setLogoutMessage('');
  };

  return (
    <AppContext.Provider value={{ logoutMessage, handleLogoutMessage, resetLogoutMessage }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
