import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex no-scrollbar overflow-x-scroll">
        <div className="flex py-3">
          {movies?.map((card) => (
            <MovieCard card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
