import React from "react";

const MovieCard = ({ card }) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        src={`https://image.tmdb.org/t/p/w500/${card?.poster_path}`}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
