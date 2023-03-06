import React, { createContext } from 'react';

const AuthContext = createContext();
const [username, setUsername] = React.useState(null);
const [email, setEmail] = React.useState(null);
const [password, setPassword] = React.useState(null);

function userLogin() {}
function userLogout() {}

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={authorization}>
      {children}
    </AuthContext.Provider>
  );
};
