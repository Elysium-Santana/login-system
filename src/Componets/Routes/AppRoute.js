import React from 'react';
import styles from './AppRoute.module.css';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from '../Forms/User';
import CreateUser from '../Forms/CreateUser';
import LoginForm from '../Forms/LoginForm';

const appRoute = () => {
  return (
    <div className={styles.RouteBx}>
      <BrowserRouter>
        <Link to="/criar">Criar</Link>
        <Link to="/">User</Link>
        <Link to="/login">Loginr</Link>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/criar" element={<CreateUser />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default appRoute;
