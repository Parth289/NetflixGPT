import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
    name : "GPT",
    initialState:{
        movieResults:null,
        movieName:null
    },
    reducers:{
        addMovieResults :(state,action)=>{
            const {movieNames,movieResults}= action.payload;
            state.movieName = movieNames;
            state.movieResults=movieResults
        }

    }
})

export const{addMovieResults}=GptSlice.actions
export default GptSlice.reducer