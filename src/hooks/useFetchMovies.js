import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utiles/Constants";
import { useDispatch } from "react-redux";
import { addmovies } from "../utiles/movieDataSlice";

const useFetchMovies =()=>{
    const dispatch = useDispatch()

    //fetch movies from TMDB and updating the store
  const getMovieData = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_OPTIONS)
    const json = await data.json()
    console.log(json.results)
    dispatch(addmovies(json.results))

  }
  
  useEffect(()=>{
    getMovieData();
  },[])
}
export default useFetchMovies;