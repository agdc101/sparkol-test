import React from 'react';

const UserWelcome = ({user}) => {
  return (
    <div className="container mt-4">
    <span><i>Login Successful</i></span>
    <h3 className="mt-4">Welcome {user}</h3>
    </div>
  );
}

export default UserWelcome;
