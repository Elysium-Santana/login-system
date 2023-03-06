import React from 'react';
const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido',
  },
  password: {
    regex: /^.{8,12}$/,
    message: 'A senha deve ter de 8 à 12 caracteres',
  },
};

const useForm = (type) => {
  const [error, setError] = React.useState(null);
  const [value, setValue] = React.useState('');

  function validate(value) {
    if (value.length === 0) {
      setError('Preencha um valor.');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);

      return false;
    } else {
      setError(null);

      return true;
    }
  }

  function onChange({ target }) {
    setValue(target.value);
    if (error) {
      validate(target.value);
    }
  }
  function onBlur({ target }) {
    validate(target.value);
  }
  return {
    onBlur,
    onChange,
    validate: () => validate(value),
    value,
    error,
  };
};

export default useForm;
