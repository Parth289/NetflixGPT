import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utiles/Constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addPopularmovies,
  addTopRatedmovies,
  addUpcomingmovies,
} from "../utiles/movieDataSlice";

const useFetchUpcomingMovies = () => {
  const dispatch = useDispatch();

    //memoization
    const isMovies = useSelector((store)=>store.movie.UpcomingMovie)

  //fetch movies from TMDB and updating the store
  const UpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingmovies(json.results));
  };

  useEffect(() => {
    !isMovies && UpcomingMovies();
  }, []);
};
export default useFetchUpcomingMovies;
