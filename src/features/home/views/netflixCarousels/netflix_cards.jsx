import { useRef, useState, useEffect } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../services/movies.services";
import useSWR from "swr";
import axios from "axios";


// import AppCarouselSection from "../../../../core/components/app_carousel_section/app_carousel_section";
import NetflixCarrousel from "./netflix_card";

export default function NetflixCarousels() {
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
  console.log(upcomingMovies);

  return (
    <>
      <NetflixCarrousel
        data={popularMovies}
        title={"Películas populares"}
      ></NetflixCarrousel>

      <NetflixCarrousel
        data={topRatedMovies}
        title={"Películas Mejor Puntuadas"}
      ></NetflixCarrousel>

      <NetflixCarrousel
        data={upcomingMovies}
        title={"Próximos Estrenos"}
      ></NetflixCarrousel>
    </>
  );
}
