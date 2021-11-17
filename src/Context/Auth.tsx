import React, { useState, createContext, useContext, useEffect } from 'react';

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
  isLoggedIn: localStorage.getItem("jwt")!==null,
  jwt: localStorage.getItem("jwt")
}

const AuthContext = createContext<authContextData>({authState: defaultState, setAuthState: () => defaultState});

export const AuthProvider = ({ children }: props) => {
  const [authState, setAuthState] = useState(defaultState);

  useEffect(() => {
    if (authState.isLoggedIn && authState.jwt) {
      localStorage.setItem("jwt", authState.jwt);
    } else {
      localStorage.removeItem("jwt");
    }
  }, [authState])

  return (
    <AuthContext.Provider value={{authState, setAuthState}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthContext;
