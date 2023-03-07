import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';

const User = () => {
  const { userLogout, data } = useContext(AuthContext);
  return (
    <div>
      <h1>{data.displayName}</h1>
      <h1>{data.email}</h1>
      <button onClick={() => userLogout()}>Logout</button>
    </div>
  );
};

export default User;
