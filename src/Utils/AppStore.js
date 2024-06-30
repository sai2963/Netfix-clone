import { configureStore } from "@reduxjs/toolkit";
import App from "../App";
import UserSlice from "./UserSlice";
import MoviesSlice from "./MoviesSlice";

const AppStore= configureStore({
  reducer:{
    user:UserSlice,
    movies:MoviesSlice,
    // //moviees:MoviesSlice,
  }  
})
export default AppStore;