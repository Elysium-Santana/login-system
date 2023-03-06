import React, { createContext } from 'react';
import { userFetch } from './Componets/Hooks/useFetch';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [username, setUsername] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  async function userLogin(api) {
    const { response } = await userFetch(api);
    // console.log(api);
  }
  // function userLogout() {}

  return (
    <AuthContext.Provider
      value={{ authorization: username, userLogin, userFetch }}
    >
      {children}
    </AuthContext.Provider>
  );
};
