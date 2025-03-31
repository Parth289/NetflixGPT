import React, { useRef, useState } from "react";
import lang from "../../../utiles/LanguageKey";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import {GEMINI_KEY, TMDB_OPTIONS} from "../../../utiles/Constants"
import { addMovieResults } from "../../../utiles/GptSlice";


const SearchBar = () => {
    const dispatch = useDispatch()
  const value = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  //Using Gemini
  const genAI = new GoogleGenerativeAI(GEMINI_KEY);
  const [loading, setLoading] = useState(false); 


  const searchMovies = async (movie)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",TMDB_OPTIONS)
    const json = await data.json()
    return json.results; 
  }

  const handleSearch = async () => {
    if (!searchText.current?.value.trim()) return; 
    setLoading(true);
    const propmt = "Act as movie recommendation system and suggest movie for the query:" + searchText?.current?.value + ". Give me only 5 name in comma separted format like Cars, Lion King, Redemption, The Dark Knight, Pulp Fiction"

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(propmt);
      const text = result.response.text();
      const movieArray = text.split(",")

      //important here const promises will have array of promise which will resolve ny Promise.all
      const promises = movieArray.map((movie)=>searchMovies(movie));
      const tmsbResults = await Promise.all(promises)
      dispatch(addMovieResults({movieNames:movieArray,movieResults:tmsbResults}))



    } catch (error) {
      console.error("Error:", error);
    }
    finally {
        setLoading(false); 
      }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center z-10 ">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9 rounded-lg"
           placeholder={lang[value].whatToWatch}
        />
        <button
          className="col-span-3 m-4 py-1 md:py-2 px-1 md:px-4 bg-red-700 text-white rounded-lg hover:bg-red-900"
          onClick={handleSearch}
        >
          {loading ? (
            <span>{lang[value].searching}</span>
          ) : (
            lang[value].search
          )}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
