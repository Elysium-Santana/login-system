import React from 'react';
import Button from '../Inputs/Button';
import Inputs from '../Inputs/Inputs';
import styles from './LoginForm.module.css';
import useForm from '../Hooks/useForm';

const LoginForm = () => {
  const email = useForm('email');
  const password = useForm('password');

  return (
    <form className={styles.form}>
      <h1>Login</h1>
      <Inputs label="Email" type="email" {...email} />
      <Inputs label="Password" type="password" {...password} />
      <Button children={'Entrar'} />
    </form>
  );
};

export default LoginForm;
