import React from "react";
import { useAuth } from "../../auth/hook/use_auth";
import AppButton from "../../../core/components/app_button/app_buton";
import { AppSwiper } from "../../../core/components/app_swiper/app_swiper";
import AppSwiperSlide from "../../../core/components/app_swiper/components/app_swiper_slide";
import { authApi } from "../../../core/datasources/remote/auth/auth_api";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../services/movies.services";
import useSWR from "swr";
import AppCarouselSection from "../../../core/components/app_carousel_section/app_carousel_section";
import AppCard from "../../../core/components/app_card/app_card";
import { useFavorites } from "../../../core/hooks/useFavorites";

const HomeView = () => {
  const { logout } = useAuth();

  const getUser = async () => {
    alert("Hola");
    // const response = await authApi.get('/user')
  };

  const {
    data: popularMovies,
    error: popularMoviesError,
    isLoading: popularMoviesIsLoading,
  } = useSWR("getPopularMovies", getPopularMovies);
  console.log(popularMovies);

  const {
    data: topRatedMovies,
    error: topRatedMoviesError,
    isLoading: topRatedMoviesIsLoading,
  } = useSWR("getTopRatedMovies", getTopRatedMovies);
  console.log(topRatedMovies);

  const {
    data: upcomingMovies,
    error: upcomingMoviesError,
    isLoading: upcomingMoviesIsLoading,
  } = useSWR("getUpcomingMovies", getUpcomingMovies);
  console.log(popularMovies);

  const { favorites } = useFavorites();

  return (
    <div>
      <AppCarouselSection
        data={popularMovies}
        title={"Popular Movies"}
      ></AppCarouselSection>

      <AppCarouselSection
        data={topRatedMovies}
        title={"Top Rated Movies"}
      ></AppCarouselSection>

      <AppCarouselSection
        data={upcomingMovies}
        title={"Upcoming Movies"}
      ></AppCarouselSection>

      <AppCarouselSection
      key={`favorites-${favorites.length}`}
        data={favorites}
        title={"Favoritos"}
      ></AppCarouselSection>

      {/* <AppCard 
      height="150px"
      width="300px"
      backgroundImageSrc={"https://picsum.photos/400/200?random=1"}>
        <AppCard.Header>HOLAA</AppCard.Header>
        <AppCard.Body>HOLAA</AppCard.Body>
        <AppCard.Footer>HOLAA</AppCard.Footer>
      </AppCard> */}
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
