import React from 'react';
import { API_CREATE_USER } from '../../Api';
import useForm from '../Hooks/useForm';
import { AuthContext } from '../../AuthContext';
import { useContext } from 'react';
import Inputs from '../Inputs/Inputs';
import styles from './LoginForm.module.css';
import Button from '../Inputs/Button';

const CreateUser = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');
  const { loginCreate } = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && email.validate() && password.validate()) {
      loginCreate(
        API_CREATE_USER({
          displayName: username.value,
          email: email.value,
          password: password.value,
        }),
      );
    }
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Login</h1>
      <Inputs label="Usuário" type="text" {...username} />
      <Inputs label="Email" type="email" {...email} />
      <Inputs label="Password" type="password" {...password} />
      <Button children={'Criar'} />
    </form>
  );
};

export default CreateUser;
