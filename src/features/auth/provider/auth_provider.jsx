import { useState, useEffect } from "react";
import { AuthContext } from "../context/auth_context";
import { AppStorage } from '../../../core/base/app_storage'
import { authApi } from '../../../core/datasources/remote/auth/auth_api'

export const AUTH_KEY = "isLoggedIn";

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const saveLoginState = async (state) => AppStorage.save(AUTH_KEY, state);
  const getLoginState = async () => AppStorage.get(AUTH_KEY);
  const removeLoginState = async () => AppStorage.remove(AUTH_KEY);

  useEffect(() => {
    const initAuth = async () => {
      const loginState = getLoginState();

      if (!loginState) return;

      setIsLoggedIn(loginState);
    };

    initAuth();
  }, []);

  const login = async (email, password) => {

    //en lugar de hacer axios.get o axios.post llamamos a la api centralizada
    // const response = await authApi.post("/login", {
    //   email,
    //   password,
    // });

    // console.log(response.data);

    setIsLoggedIn(true);
    saveLoginState(true);
  };

  const logout = async () => {
    setIsLoggedIn(false);
    removeLoginState();
  };

  useEffect(() => {

    //INTERCEPTORES PARA LA REQUEST
    //ESTE OCURRE ANTES DE ENVIAR LA SOLICITUD AL SV

    authApi.interceptors.request.use(
      async (config) => {
        //Se puede hacer cualquier cosa con el objeto de la requestantes de enviarlo al sv
        // const token = await AppStorage.get(AUTH_KEY);

        // if(token) {
        //   config.headers['Authorization'] = `Bearer ${token}`;
        // }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    //INTERCEPTORES PARA LA RESPONSE
    //Quiero que cada vez que se realicen peticiones a esta Api el interceptor la intercepte y realice ciertas tareas.
    //ESTO OCURRE DESPUÉS DE RECIBIR LA SOLICITUD DEL SV
    authApi.interceptors.response.use(
      (response) => response,
      async (error) => {
        //se puede hacer cualquier cosa con el objeto del error de la response
        if (error.response.status === 401) await logout();
        return Promise.reject(error);
      }
    );
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
