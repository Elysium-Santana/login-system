import React, { useContext } from 'react';
import Button from '../Inputs/Button';
import Inputs from '../Inputs/Inputs';
import styles from './LoginForm.module.css';
import useForm from '../Hooks/useForm';
import { USER_LOGIN } from '../../Api';
import { AuthContext } from '../../AuthContext';
const LoginForm = () => {
  const email = useForm('email');
  const password = useForm('password');
  const { userLogin } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    userLogin(USER_LOGIN({ email: email.value, password: password.value }));
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Login</h1>
      <Inputs label="Email" type="email" {...email} />
      <Inputs label="Password" type="password" {...password} />
      <Button children={'Entrar'} />
    </form>
  );
};

export default LoginForm;
