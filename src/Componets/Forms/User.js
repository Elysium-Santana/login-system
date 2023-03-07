import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';
import Button from '../Inputs/Button';
import styles from './User.module.css';

const User = () => {
  const { userLogout, data } = useContext(AuthContext);
  return (
    <div className={styles.userBx}>
      <h1>{data.displayName}</h1>
      <h2>{'Email: ' + data.email}</h2>
      <p>
        Este projeto de login simples utiliza recursos como o Context API para
        gerenciar o estado de autenticação e a autenticação foi implementada
        para garantir o acesso apenas às rotas protegidas da aplicação. A API do
        Firebase do Google foi utilizada para realizar a autenticação de
        usuários e, além disso, foram implementados recursos de validação de
        dados .{' '}
      </p>
      <Button onClick={() => userLogout()} children={'Logout'} />
    </div>
  );
};

export default User;
