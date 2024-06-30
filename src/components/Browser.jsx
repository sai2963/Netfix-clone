import useNowPlaying from "../hooks/useNowPlaying";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browser = () => {
    useNowPlaying();
    return (
        <div>
            <Header />
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    );
};

export default Browser;
