import React from 'react';
import styles from './Inputs.module.css';

const Inputs = ({ name, label, value, onChange, type, error, onBlur }) => {
  return (
    <div>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        type={type}
        onBlur={onBlur}
      />
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <p style={{ visibility: 'hidden' }}>{'-'}</p>
      )}
    </div>
  );
};

export default Inputs;
