import React from "react";
import { useAuth } from "../../auth/hook/use_auth.js";
import { authApi } from "../../../core/datasources/remote/auth/auth_api.js";

const HomeViewBackup = () => {
  const { logout } = useAuth();

  const getUser = async () => {
      const response = await authApi.get('/user')
  }
  return (
    <div>
      <h1>HOME</h1>
      <button onClick={getUser}>GET USER</button>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
};

export default HomeView;
