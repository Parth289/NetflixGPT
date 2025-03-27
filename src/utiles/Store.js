import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import movieReducer from "./movieDataSlice";

const Store = configureStore({
  reducer: {
    user: userSlice,
    movie: movieReducer,
  },
});

export default Store;
