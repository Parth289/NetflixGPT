import { createSlice } from "@reduxjs/toolkit";

const movieData = createSlice({
    name :"movieSlice",
    initialState : {
        nowPlayingMoview : null
    },
    reducers : {
        addmovies : (state, action)=>{
            state.nowPlayingMoview = action.payload
        }
    }
})

export const {addmovies} = movieData.actions
export default movieData.reducer