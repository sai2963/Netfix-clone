import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addTrailer } from "../Utils/MoviesSlice";
import { useEffect } from "react";

const UseTrailer = () => {
  const dispatch = useDispatch();
  
  const getmovievideos = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/1022789/videos?language=en-US",
        API_OPTIONS
      );
      const json = await response.json();

      if (json.results && json.results.length > 0) {
        const filterdata = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterdata.length ? filterdata[0] : json.results[0];
        dispatch(addTrailer(trailer));
      } else {
        dispatch(addTrailer(null));
      }
    } catch (error) {
      console.error("Failed to fetch movie videos:", error);
      dispatch(addTrailer(null));
    }
  };

  useEffect(() => {
    getmovievideos();
  }, [dispatch]);
};

export default UseTrailer;
