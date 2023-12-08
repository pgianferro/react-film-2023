import React from "react";
import { Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, Image } from "@nextui-org/react";
import { useAuth } from "../../../../auth/hook/use_auth.js";
import { authApi } from "../../../../../core/datasources/remote/auth/auth_api.js";
import "../../../../../index.css";

const Perfil = () => {
  const { logout } = useAuth();
  const getUser = async () => {
    const response = await authApi.get("/user");
  };

  return (
    <div>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            // isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="netflix-avatar.webp"
            // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Logueado como</p>
            <p className="font-semibold">netflix@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">👱‍♂️ Lucas</DropdownItem>
          <DropdownItem key="team_settings">👨‍🦳 Pablo</DropdownItem>
          <DropdownItem key="analytics">👨‍🦱 Nico</DropdownItem>
          <DropdownItem key="system">Administrar Perfiles</DropdownItem>
          <DropdownItem key="configurations">Transferir Perfil</DropdownItem>
          <DropdownItem onClick={getUser} key="account">Cuenta</DropdownItem>
          <DropdownItem key="help_and_feedback">Centro de Ayuda</DropdownItem>
          <DropdownItem onClick={logout} key="logout" color="danger">
            Cerrar sesión en Netflix
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {/* <NavbarItem>
        <Image
          width={40}
          alt="avatar image"
          src="../public/netflix-avatar.webp"
          radius="sm"
          onClick={logout}
          style={{ cursor: "pointer" }}
        />
      </NavbarItem> */}
    </div>
  );
};

export default Perfil;
