import React, { createContext } from 'react';
import { userFetch } from './Componets/Hooks/useFetch';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  React.useEffect(() => {
    const userLoggedRecovery = window.localStorage.getItem('user');
    if (userLoggedRecovery) {
      setData(JSON.parse(userLoggedRecovery));
      console.log(userLoggedRecovery);
    }
  }, []);

  function responseOk(json) {
    const LoggedUser = {
      displayName: json.displayName,
      email: json.email,
      idToken: json.idToken,
    };
    setData(LoggedUser);
    localStorage.setItem('user', JSON.stringify(LoggedUser));
    console.log(data);
    navigate('/user');
  }

  async function userLogin(api) {
    setLoading(true);
    const { response, json, erro } = await userFetch(api);
    if (response) {
      setLoading(false);
      setError(erro);
    }
    response.ok && responseOk(json);
  }

  async function loginCreate(api) {
    const { response, json, erro } = await userFetch(api);
    if (response) {
      setLoading(false);
      setError(erro);
    }
    response.ok && responseOk(json);
  }

  function userLogout() {
    localStorage.removeItem('user');
    setData(null);
  }

  return (
    <AuthContext.Provider
      value={{
        authorization: data,
        data,
        setData,
        userLogin,
        userFetch,
        loginCreate,
        userLogout,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
