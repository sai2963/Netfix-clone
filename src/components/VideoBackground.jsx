import { useEffect, useState } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../Utils/MoviesSlice";
import UseTrailer from "../hooks/useTrailer";

const VideoBackground = () => {
  UseTrailer();
  const trailervideo = useSelector((store) => store.movies?.trailer);
  console.log(trailervideo);
  
  if (!trailervideo) {
    return <div>Loading...</div>;
  }
  console.log(trailervideo.key)
  return (
    <>
      <iframe
        className="w-max"
        src={"https://www.youtube.com/embed/" + trailervideo.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </>
  );
};

export default VideoBackground;
