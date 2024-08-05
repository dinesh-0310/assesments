import { useState } from "react";
import { handleLogin, handleSignup } from "../utils";

const useAuthenticate = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isSigningUp, setIsSigningUp] = useState<boolean>(false);

  const handleUserLogin = (username: string, password: string) => {    
    const isLoginSuccessful = handleLogin(username, password);
    if (isLoginSuccessful) {
      setIsAuthenticated(true);
    }
  }

  const handleUserSignup = (email: string, username: string, password: string) => {
    const isSigningUpSuccessful = handleSignup(email, username, password);
    if (isSigningUpSuccessful) {
      setIsSigningUp(false);
    }
  }

  return { isAuthenticated, isSigningUp, handleUserLogin, handleUserSignup, setIsSigningUp };
};

export { useAuthenticate }