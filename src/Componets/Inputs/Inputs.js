import React from 'react';
import styles from './Inputs.module.css';

const Inputs = ({ name, label, value, onChange, type, error }) => {
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
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Inputs;
