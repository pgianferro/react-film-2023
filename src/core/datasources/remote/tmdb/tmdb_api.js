// VERSIÓN ACTUAL

import axios from "axios";

export const tmdb_api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
    language: "es-ES",
  },
});

export const tmdb_paths = {
  movies: {
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
  },
  tv: {
    popular: "/tv/popular",
    top_rated: "/tv/top_rated",
    airing_today: "/tv/airing_today",
  },
  images: {
    poster: {
      sizes: {
        w92: "/w92",
        w154: "/w154",
        w185: "/w185",
        w342: "/w342",
        w500: "/w500",
        w780: "/w780",
        original: "/original",
      },
      url: "https://image.tmdb.org/t/p",
    },
    backdrop: {
      sizes: {
        w300: "/w300",
        w780: "/w780",
        w1280: "/w1280",
        original: "/original",
      },
      url: "https://image.tmdb.org/t/p",
    },
  },
};
// VERSIÓN NUESTRA
//import axios from "axios";

// const TMDB_API = axios.create({
//   baseURL : 'https://api.themoviedb.org/3',
//   params: {
//     api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
//     language: 'es-ES',
//   }
// });

// const TMDB_PATHS = {
//   tv_airing_today: '/tv/airing_today',
//   tv_on_the_air: '/tv/on_the_air',
//   tv_popular: '/tv/popular',
//   tv_top_rated: '/tv/top_rated',
// }


// VERSIÓN NICO CURSO ANTERIOR

// import axios from "axios";

// export const tmdb = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   params: {
//     api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
//     language: "es-ES",
//   },
// });

// export const tmdb_paths = {
//   movies: {
//     popular: "/movie/popular",
//     topRated: "/movie/top_rated",
//     upcoming: "/movie/upcoming",
//     nowPlaying: "/movie/now_playing",
//     details: (id) => `/movie/${id}`,
//     videos: (id) => `/movie/${id}/videos`,
//     recommendations: (id) => `/movie/${id}/recommendations`,
//   },
//   tv: {
//     popular: "/tv/popular",
//     topRated: "/tv/top_rated",
//     onTheAir: "/tv/on_the_air",
//     airingToday: "/tv/airing_today",
//     details: (id) => `/tv/${id}`,
//     videos: (id) => `/tv/${id}/videos`,
//     recommendations: (id) => `/tv/${id}/recommendations`,
//   },
//   trending: {
//     all: "/trending/all/day",
//     movies: "/trending/movie/day",
//     tv: "/trending/tv/day",
//   },
//   images: {
//     url: "https://image.tmdb.org/t/p",
//     sizes: {
//       small: "/w300",
//       medium: "/w500",
//       large: "/w1280",
//       original: "/original",
//     },
//     poster: (path, size = "large") => {
//       return `${tmdb_paths.images.url}${tmdb_paths.images.sizes[size]}${path}`;
//     },
//     backdrop: (path, size = "large") => {
//       return `${tmdb_paths.images.url}${tmdb_paths.images.sizes[size]}${path}`;
//     },
//   },
// };
