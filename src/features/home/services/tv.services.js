import { tmdb_api, tmdb_paths } from "../../../core/datasources/remote/tmdb/tmdb_api"
import { tmdbMoviesTVAdapter, tmdbShowsTVAdapter } from "../../adapters/tmdb.adapters";

export const getPopularShows = async () => {
    const {data} = await tmdb_api.get(tmdb_paths.tv.popular);

    return tmdbShowsTVAdapter(data);    

}

export const getTopRatedShows = async () => {
    const {data} = await tmdb_api.get(tmdb_paths.tv.top_rated);

    return tmdbShowsTVAdapter(data);    

}

export const getAiringTodayShows = async () => {
    const {data} = await tmdb_api.get(tmdb_paths.tv.airing_today);

    return tmdbShowsTVAdapter(data);    

}