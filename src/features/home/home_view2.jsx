import React from "react";
import { useAuth } from "../../core/auth/hook/use_auth";
import { authApi } from "../../core/datasources/remote/auth/auth_api";
import NetflixNavbar from './netflix_navbar.jsx'
import NetflixImage from './netflix_image.jsx'
import NetflixHeader from './netflix_header.jsx'
import NetflixCards from './netflix_cards.jsx' 
import { Divider, Spacer } from '@nextui-org/react'
import MovieCard2 from "./netflix_cards2.jsx";

export default function Homeview2() {
  const { logout } = useAuth();

  const getUser = async () => {
    const response = await authApi.get("/user");
  };

  return (
    <>
      <div>
        <h1>HOME</h1>
        <button onClick={getUser}>GET USER</button>
        <button onClick={logout}>Cerrar sesión</button>
      </div>
      <NetflixNavbar></NetflixNavbar>
      <NetflixImage></NetflixImage>
      <Spacer y={10} ></Spacer>
      <NetflixHeader></NetflixHeader>
      <Divider className="my-4" />
      {/* <NetflixCards></NetflixCards> */}
      <MovieCard2></MovieCard2>
      <Spacer y={10} ></Spacer>
    </>
  );
}
