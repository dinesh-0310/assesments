import React, { useState } from "react";
import { Login, Modal, SignUp } from "./components";
import { AppContainer } from "./appStyles";
import { Feed } from "./containers";
import { useAuthenticate } from "./hooks";

function App() {
  const {isAuthenticated, isSigningUp, handleUserLogin, handleUserSignup, setIsSigningUp} = useAuthenticate();  
  return (
    <AppContainer>
       {!isAuthenticated ? (
        isSigningUp ? (
          <SignUp onSignup={handleUserSignup} onSwitchToLogin={() => setIsSigningUp(false)} />
        ) : (
          <Login onLogin={handleUserLogin} onSwitchToSignup={() => setIsSigningUp(true)} />
        )
      ) : (
        <Feed />
      )}
    </AppContainer>
  );
}

export default App;
