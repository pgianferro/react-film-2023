import React from "react";
import { useAuth } from "../../../auth/hook/use_auth.js";
import { authApi } from "../../../../core/datasources/remote/auth/auth_api.js";
import { Divider, Spacer } from '@nextui-org/react'
import { NetflixBanner, NetflixCards, NetflixHeader, NetflixNavbar} from '../homeViewBarrel';
import HomeView from "../../backup/home_view.jsx";
export default function Homeview2() {
  const { logout } = useAuth();

  const getUser = async () => {
    const response = await authApi.get("/user");
  };

  return (
    <>
      {/* <div>
        <h1>HOME</h1>
        <button onClick={getUser}>GET USER</button>
        <button onClick={logout}>Cerrar sesión</button>
      </div> */}
      <NetflixNavbar  ></NetflixNavbar>
      <NetflixBanner></NetflixBanner>
      {/* <HomeView></HomeView> */}
      <NetflixHeader></NetflixHeader>
      <NetflixCards></NetflixCards>
      <NetflixHeader></NetflixHeader>
      <NetflixCards></NetflixCards>
      <NetflixHeader></NetflixHeader>
      <NetflixCards></NetflixCards>
      <Spacer y={10} ></Spacer>
    </>
  );
}
