import React from 'react';
import Button from '../Inputs/Button';
import Inputs from '../Inputs/Inputs';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <h1>Login</h1>
      <Inputs label="Email" value="" type="email" />
      <Inputs label="Password" value="" type="password" />
      <Button children={'Entrar'} />
    </form>
  );
};

export default LoginForm;
