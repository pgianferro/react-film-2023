import React from "react";
import { NavbarItem, Image } from "@nextui-org/react";
import { useAuth } from '../../../../auth/hook/use_auth.js'
import { authApi } from '../../../../../core/datasources/remote/auth/auth_api.js'

const Perfil = () => {
  const { logout } = useAuth();
  const getUser = async () => {
    const response = await authApi.get("/user");
  };

  return (
    <div>
      <NavbarItem>
        <Image
          width={40}
          alt="avatar image"
          src="../public/netflix-avatar.webp"
          radius="sm"
          onClick={logout}
          style={{ cursor: 'pointer' }}
        />
      </NavbarItem>
    </div>
  );
};

export default Perfil;
