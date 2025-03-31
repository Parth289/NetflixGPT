import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utiles/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addmovies } from "../utiles/movieDataSlice";

const useFetchMovies = () => {
  const dispatch = useDispatch();

    //memoization
    const isMovies = useSelector((store)=>store.movie.nowPlayingMoview)

  //fetch movies from TMDB and updating the store
  const getMovieData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await data.json();
    dispatch(addmovies(json.results));
  };

  useEffect(() => {
    !isMovies && getMovieData();
  }, []);
};
export default useFetchMovies;
