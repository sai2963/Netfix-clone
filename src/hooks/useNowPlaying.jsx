import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addNowPlaying } from "../Utils/MoviesSlice";

const useNowPlaying = () =>{
    const dispatch = useDispatch();
    const getNowPlaying = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const json = await response.json();
            dispatch(addNowPlaying(json.results))
            //console.log(json.results);
        } catch (error) {
            console.error('Fetch error: ', error);
        }
    };

    useEffect(() => {
        getNowPlaying();
    }, []);

}
export default useNowPlaying