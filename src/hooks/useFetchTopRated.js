import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utiles/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularmovies, addTopRatedmovies } from "../utiles/movieDataSlice";

const useFetchTopRated = () => {
  const dispatch = useDispatch();

    //memoization
    const isMovies = useSelector((store)=>store.movie.TopRatedMovie)

  //fetch movies from TMDB and updating the store
  const TopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      TMDB_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedmovies(json.results));
  };

  useEffect(() => {
    !isMovies && TopRated();
  }, []);
};
export default useFetchTopRated;
