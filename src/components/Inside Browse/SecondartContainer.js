import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import lang from "../../utiles/LanguageKey";

const SecondartContainer = () => {
  const movies = useSelector((Store) => Store.movie);
  const value = useSelector((store) => store.config?.lang);

  // const movies = useSelector((Store)=>Store.movie?.nowPlayingMoview)

  return (
    <div className="bg-black">
      <div className=" mt-0 md:mt-[-9rem] relative">
        <MovieList title={lang[value].nowPlaying} movies={movies?.nowPlayingMoview} />
        <MovieList title={lang[value].upcoming} movies={movies?.UpcomingMovie} />
        <MovieList title={lang[value].topRated} movies={movies?.TopRatedMovie} />
        <MovieList title={lang[value].comedy} movies={movies?.nowPlayingMoview} />
        <MovieList title={lang[value].popular} movies={movies?.PopularMovie} />
      </div>
    </div>
  );
};

export default SecondartContainer;
