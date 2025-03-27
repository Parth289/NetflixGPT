import { createSlice } from "@reduxjs/toolkit";

const movieData = createSlice({
  name: "movieSlice",
  initialState: {
    nowPlayingMoview: null,
  },
  reducers: {
    addmovies: (state, action) => {
      state.nowPlayingMoview = action.payload;
    },
    addPopularmovies: (state, action) => {
      state.PopularMovie = action.payload;
    },
    addTopRatedmovies: (state, action) => {
      state.TopRatedMovie = action.payload;
    },
    addUpcomingmovies: (state, action) => {
      state.UpcomingMovie = action.payload;
    },
  },
});

export const {
  addmovies,
  addPopularmovies,
  addTopRatedmovies,
  addUpcomingmovies,
} = movieData.actions;
export default movieData.reducer;
