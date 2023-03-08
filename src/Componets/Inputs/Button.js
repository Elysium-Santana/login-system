import React from 'react';
import styles from './Button.module.css';
import { AuthContext } from '../../AuthContext';
import { useContext } from 'react';

const Button = ({ children, onClick }) => {
  const { loading, error } = useContext(AuthContext);

  return (
    <div>
      {error ? (
        <p style={{ color: 'red', marginBottom: '-1rem' }}>{error}</p>
      ) : (
        <p style={{ visibility: 'hidden', marginBottom: '-1rem' }}>{'-'}</p>
      )}

      {loading ? (
        <button onClick={onClick} className={styles.button} disabled>
          {children}
        </button>
      ) : (
        <button onClick={onClick} className={styles.button}>
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;
