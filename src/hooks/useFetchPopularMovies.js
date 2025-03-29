import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utiles/Constants";
import { useDispatch } from "react-redux";
import { addPopularmovies } from "../utiles/movieDataSlice";

const useFetchPopularMovies = () => {
  const dispatch = useDispatch();

  //fetch movies from TMDB and updating the store
  const PopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularmovies(json.results));
  };

  useEffect(() => {
    PopularMovies();
  }, []);
};
export default useFetchPopularMovies;
