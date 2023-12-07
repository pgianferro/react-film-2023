import { useRef, useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Link,
} from "@nextui-org/react";
import axios from "axios";

import NetflixCarrousel from "./netflix_carousel";

import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../services/movies.services";

import {
  getPopularShows,
  getTopRatedShows,
  getAiringTodayShows,
} from "../../services/tv.services";

import useSWR from "swr";

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

  const {
    data: popularShows,
    error: popularShowsError,
    isLoading: popularShowsIsLoading,
  } = useSWR("getPopularShows", getPopularShows);
  console.log("Popular Shows",popularShows);

  const {
    data: topRatedShows,
    error: topRatedShowsError,
    isLoading: topRatedShowsIsLoading,
  } = useSWR("getTopRatedShows", getTopRatedShows);
  console.log(topRatedShows);

  const {
    data: airingTodayShows,
    error: airingTodayShowsError,
    isLoading: airingTodayShowsIsLoading,
  } = useSWR("getTopRatedShows", getAiringTodayShows);
  console.log(airingTodayShows);

  return (
    <>
      <NetflixCarrousel
        data={popularMovies}
        title={"Películas populares"}
      ></NetflixCarrousel>

      <NetflixCarrousel
        data={topRatedMovies}
        title={"Películas mejor puntuadas"}
      ></NetflixCarrousel>

      <NetflixCarrousel
        data={upcomingMovies}
        title={"Películas a estrenar"}
      ></NetflixCarrousel>

      <NetflixCarrousel
        data={popularShows}
        title={"Series populares"}
      ></NetflixCarrousel>

      <NetflixCarrousel
        data={topRatedShows}
        title={"Series mejor puntuadas"}
      ></NetflixCarrousel>

      <NetflixCarrousel
        data={airingTodayShows}
        title={"Series transmitiendo hoy"}
      ></NetflixCarrousel>
    </>
  );
}
