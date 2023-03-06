import React from 'react';
import styles from './AppRoute.module.css';
import { AuthProvider } from '../../AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from '../Forms/User';
import CreateUser from '../Forms/CreateUser';
import LoginForm from '../Forms/LoginForm';

const appRoute = () => {
  return (
    <div className={styles.RouteBx}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/user" element={<User />} />
            <Route path="/criar" element={<CreateUser />} />
            <Route path="/" element={<LoginForm />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
};

export default appRoute;
