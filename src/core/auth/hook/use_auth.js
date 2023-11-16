import { useContext } from "react";
import { AuthContext } from "../context/auth_context";

//Acá se unen las 3 piezas: Conext, el Provider del Context y el hook que toma y retorna los valores del Provider.
export const useAuth = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return {
    isLoggedIn,
    login,
    logout,
  };
};
