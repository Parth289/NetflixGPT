import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import movieReducer from "./movieDataSlice";
import configSlice from "./ConfigSlice";
import GptSlice from "./GptSlice"

const Store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieReducer,
    config: configSlice,
    gpt:GptSlice
  },
});

export default Store;
