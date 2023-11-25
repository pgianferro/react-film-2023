import React from "react";
import { useAuth } from "../../features/auth/hook/use_auth";
// import AppButton from "../../core/components/app_button/app_buton";
import { AppSwiper } from "../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../core/components/app_swiper/components/app_swiper_slide";
// import { authApi } from "../../core/datasources/remote/auth/auth_api";

const HomeView = () => {
  const { logout } = useAuth();

  const getUser = async () => {
    alert("Hola");
    // const response = await authApi.get('/user')
  };
  return (
    <div>
      <h1>Películas mejor puntuadas</h1>
      <AppSwiper>
        {Array.from({ length: 10 }).map((_, index) => (
          <AppSwiperSlide key={index}>
            <div
              style={{
                height: "150px",
                width: "250px",
                backgroundColor:"red"
              }}
            >
              <h3>{index}</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
      <h1>Películas mejor puntuadas</h1>
      <AppSwiper>
        {Array.from({ length: 10 }).map((_, index) => (
          <AppSwiperSlide key={index}>
            <div
              style={{
                height: "150px",
                width: "250px",
                backgroundColor:"red"
              }}
            >
              <h3>{index}</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
      <h1>Películas mejor puntuadas</h1>
      <AppSwiper>
        {Array.from({ length: 10 }).map((_, index) => (
          <AppSwiperSlide key={index}>
            <div
              style={{
                height: "150px",
                width: "250px",
                backgroundColor:"red"
              }}
            >
              <h3>{index}</h3>
            </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
      {/* <h1>HOME</h1>
      <AppButton
      style={{
        backgroundColor:"red",
        color:"white",
        borderRadius: "5px",
        padding:"10px",
        border: "none",
        cursor:"pointer"

      }}
      onClick={getUser}
      >Mostrar Alerta</AppButton>
      <button onClick={logout}>Cerrar sesión</button> */}
    </div>
    
  );
};

export default HomeView;
