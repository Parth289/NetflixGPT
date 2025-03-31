import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../MovieList";

const SearchResults = () => {
const {movieName,movieResults} = useSelector((store)=>store.gpt)
if(!movieName) return null

  return <div className="bg-black opacity-90 p-4 m-4">
    {movieName.map((movie,index)=> (
        <MovieList key={movie} title={movie} movies={movieResults[index]}/>
        ))}
    </div>;
};

export default SearchResults;
