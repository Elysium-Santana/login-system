import React from 'react';
import styles from './Home.module.css';
import AppRoute from './AppRoute';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../AuthContext';

const Home = () => {
  const { data } = useContext(AuthContext);
  const texts = {
    _criar: {
      h1: 'É novo por aqui...',
      p: 'Que ótimo! Um novo rosto por aqui! Para aproveitar tudo que temos a oferecer, crie uma conta agora mesmo. É rápido e fácil, basta preencher alguns dados e  clicar em "Criar conta',
    },
    _user: {
      h1: `Olá, ${data && data.displayName}!`,
      p: 'Que prazer ver você por aqui! Esperamos que aproveite ao máximo tudo que nossa área restrita tem a oferecer. Caso precise de ajuda em algo, fique à vontade para entrar em contato com a gente.',
    },
    _: {
      h1: 'Bem-vindo de volta!!',
      p: 'É sempre um prazer receber amigos por aqui. Digite seu e-mail e senha abaixo para acessar sua conta. ',
    },
  };

  const location = useLocation();
  const [userText, setUserText] = React.useState('_');

  React.useEffect(() => {
    setUserText(String(location.pathname.replace('/', '_')));
  }, [location.pathname]);

  return (
    <section className={styles.conteiner}>
      <div className={styles.homeContent}>
        <h1>{texts[userText].h1}</h1>
        <p>{texts[userText].p}</p>
      </div>
      <AppRoute />
    </section>
  );
};

export default Home;
