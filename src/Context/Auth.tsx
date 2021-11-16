import React, { useState, createContext, useContext } from 'react';

interface authStateData {
  isLoggedIn: boolean;
  jwt: string | null;
}

interface authContextData {
  authState: authStateData;
  setAuthState: React.Dispatch<React.SetStateAction<authStateData>>;
}

interface props {
  children: React.ReactNode;
}

const defaultState: authStateData = {
  isLoggedIn: false,
  jwt: null
}

const AuthContext = createContext<authContextData>({authState: defaultState, setAuthState: () => defaultState});

export const AuthProvider = ({ children }: props) => {
  const [authState, setAuthState] = useState(defaultState);

  return (
    <AuthContext.Provider value={{authState, setAuthState}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthContext;
