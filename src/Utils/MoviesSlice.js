import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice =createSlice({
    name:"movies",
    initialState:{
        NowPlaying:null,
        
        trailer:null,
    },
    reducers:{
        addNowPlaying : (state,action)=>{
            state.NowPlaying=action.payload;
        },
        addTrailer : (state, action) =>{
            state.trailer=action.payload;
        }
        

    }
})
export const {addNowPlaying ,addTrailer}=MoviesSlice.actions;
export default MoviesSlice.reducer;