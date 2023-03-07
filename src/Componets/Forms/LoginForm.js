import React, { useContext } from 'react';
import Button from '../Inputs/Button';
import Inputs from '../Inputs/Inputs';
import styles from './LoginForm.module.css';
import useForm from '../Hooks/useForm';
import { API_LOGIN } from '../../Api';
import { AuthContext } from '../../AuthContext';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const email = useForm('email');
  const password = useForm('password');
  const { userLogin } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      userLogin(API_LOGIN({ email: email.value, password: password.value }));
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Login</h1>
      <Inputs label="Email" type="email" {...email} />
      <Inputs label="Password" type="password" {...password} />
      <Button children={'Entrar'} />
      <p style={{ marginTop: '.5rem', color: '#eee', alignSelf: 'center' }}>
        Ainda não tem Cadastro? Cadastre-se{' '}
        <Link to="/criar">{'>'} Clique Aqui</Link>
      </p>
    </form>
  );
};

export default LoginForm;
