import React from 'react';

const UserLogoutButton = ({ onLogout }) => {
  const handleUserLogout = () => {
    onLogout();
  };

  return (
    <div className="container">
      <button className="mt-4 btn btn-primary" onClick={handleUserLogout}>Log Out</button>
    </div>
  )
}

export default UserLogoutButton;
