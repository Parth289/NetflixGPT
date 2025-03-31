import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

const SearchGpt = () => {
  return (
    <>
    <div className="fixed -z-10">
      <img
        className="h-screen w-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="logo"
      />
      </div>
      <div className="">
      <SearchBar />
      <SearchResults />
    </div>
    </>
  );
};

export default SearchGpt;

{/* <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </> */}
{/* <div className="absolute">
      <img
        className="h-screen w-screen object-cover" */}