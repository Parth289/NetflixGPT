import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondartContainer = () => {
  const movies = useSelector((Store) => Store.movie);
  // const movies = useSelector((Store)=>Store.movie?.nowPlayingMoview)

  return (
    <div className="bg-black">
      <div className=" mt-0 md:mt-[-12rem]  relative">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMoview} />
        <MovieList title={"Popular"} movies={movies?.PopularMovie} />
        <MovieList title={"Top Rated"} movies={movies?.TopRatedMovie} />
        <MovieList title={"Comedy"} movies={movies?.nowPlayingMoview} />
        <MovieList title={"Upcoming"} movies={movies?.UpcomingMovie} />
      </div>
    </div>
  );
};

export default SecondartContainer;
