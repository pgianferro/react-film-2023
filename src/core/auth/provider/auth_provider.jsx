import { useState, useEffect } from "react";
import { AuthContext } from "../context/auth_context";
import { AppStorage } from "../../base/app_storage";

export const AUTH_KEY = 'isLoggedIn'

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const AuthProvider = ({ children }) => {

  const[isLoggedIn, setIsLoggedIn] = useState(false)

  const saveLoginState = async (state) => AppStorage.save(AUTH_KEY, state)
  const getLoginState = async () => AppStorage.get(AUTH_KEY)
  const removeLoginState = async () => AppStorage.remove(AUTH_KEY)

  useEffect(() => {
    const initAuth = async () => {

      const loginState = getLoginState();

      if (!loginState) return;

      setIsLoggedIn(loginState);
    };

    initAuth();
  }, [])
  

  const login = async () => {
    setIsLoggedIn(true);
    saveLoginState(true);
  }

  const logout = async () => {
    setIsLoggedIn(false);
    removeLoginState();
  }

  return <AuthContext.Provider value={{
    isLoggedIn,
    login,
    logout,
  }}>
    {children}
  </AuthContext.Provider>;
};
