import React from 'react';
import styles from './Home.module.css';
import AppRoute from './AppRoute';
const Home = () => {
  return (
    <section className={styles.conteiner}>
      <div className={styles.homeContent}>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend
          neque justo, a euismod mauris accumsan vitae. Sed dapibus arcu nec
          massa euismod, nec porttitor odio pharetra. Aenean orci magna,
        </p>
      </div>
      <AppRoute />
    </section>
  );
};

export default Home;
