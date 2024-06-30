import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = ()=>{
    const movies = useSelector(store => store.movies?.NowPlaying)
    console.log(movies);
    if(!movies) return ;
    const mainMovie=movies[1]
    //console.log(mainMovie);
    return (
        <>
        <VideoBackground/>
        <VideoTitle mainMovie={mainMovie}/>        
        </>
    )
}
export default MainContainer;