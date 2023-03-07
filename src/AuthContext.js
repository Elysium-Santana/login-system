import React, { createContext } from 'react';
import { userFetch } from './Componets/Hooks/useFetch';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  // const [username, setUsername] = React.useState(null);
  const [data, setData] = React.useState(null);
  // const [password, setPassword] = React.useState(null);
  const navigate = useNavigate();

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
    const { response, json } = await userFetch(api);
    if (response.ok) {
      responseOk(json);
    }
  }

  function userLogout() {
    localStorage.removeItem('user');
    setData(null);
  }

  async function loginCreate(api) {
    const { response, json } = await userFetch(api);
    if (response.ok) {
      responseOk(json);
    }
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
