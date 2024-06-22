import { configureStore } from "@reduxjs/toolkit";
import App from "../App";
import UserSlice from "./UserSlice";

const AppStore= configureStore({
  reducer:{
    user:UserSlice
  }  
})
export default AppStore;