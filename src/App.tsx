import React from 'react';
import AuthContext, { AuthProvider } from 'Context/Auth';
import Login from 'Pages/login/Login';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
      {({authState, }) => {
        const {isLoggedIn, } = authState;
        return !isLoggedIn ?
        (
          <div className="App">
            <Login />
          </div>
        ) : (
          <div className="App">
          </div>
        );
      }}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App;
