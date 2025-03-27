import React from "react";
import Header from "./Header";
import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utiles/Constants";
import { useDispatch } from "react-redux";
import { addmovies } from "../utiles/movieDataSlice";
import MainContainer from "./Inside Browse/MainContainer";
import SecondartContainer from "./Inside Browse/SecondartContainer";
import useFetchMovies from "../hooks/useFetchMovies";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import useFetchTopRated from "../hooks/useFetchTopRated";
import useFetchUpcomingMovies from "../hooks/useFetchUpcomingMovies";

const Browse = () => {
  // const dispatch = useDispatch()

  // const getMovieData = async ()=>{
  //    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', TMDB_OPTIONS)
  //    const json = await data.json()
  //    console.log(json.results)
  //    dispatch(addmovies(json.results))
  //  }
  //  useEffect(()=>{
  //    getMovieData();
  //  },[])

  useFetchMovies();
  useFetchPopularMovies();
  useFetchTopRated();
  useFetchUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondartContainer />
    </div>
  );
};

export default Browse;
