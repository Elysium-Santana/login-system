import React from 'react';
import { AuthContext } from '../../AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const { authorization } = useContext(AuthContext);

  if (!authorization) {
    return <Navigate to="/" />;
  }
  return children;
};
