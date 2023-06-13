import React, { useContext } from 'react';
import { AppContext } from '../context/LogoutContext';

const UserLogoutButton = ({ onLogout }) => {
  const { handleLogoutMessage } = useContext(AppContext);

  const handleUserLogout = () => {
    onLogout();
    handleLogoutMessage();
  };

  return (
    <div className="container">
      <button className="mt-4 btn btn-primary" onClick={handleUserLogout}>Log Out</button>
    </div>
  )
}

export default UserLogoutButton;
