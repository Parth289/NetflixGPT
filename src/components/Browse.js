import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import { TMDB_OPTIONS } from "../utiles/Constants";
import { useDispatch } from "react-redux";
import { addmovies } from "../utiles/movieDataSlice";
import MainContainer from "./Inside Browse/MainContainer";
import SecondartContainer from "./Inside Browse/SecondartContainer";
import useFetchMovies from "../hooks/useFetchMovies";
import useFetchPopularMovies from "../hooks/useFetchPopularMovies";
import useFetchTopRated from "../hooks/useFetchTopRated";
import useFetchUpcomingMovies from "../hooks/useFetchUpcomingMovies";
import SearchGpt from "./Inside Browse/GPT/SearchGpt";

const Browse = () => {
  const [showSearchGpt, setShowSearchGpt] = useState(false);

  useFetchMovies();
  useFetchPopularMovies();
  useFetchTopRated();
  useFetchUpcomingMovies();

  return (
    <div>
      <Header setShowSearchGpt={setShowSearchGpt} value={showSearchGpt} />
      {showSearchGpt ? (
        <SearchGpt />
      ) : (
        <>
          <MainContainer /> <SecondartContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
