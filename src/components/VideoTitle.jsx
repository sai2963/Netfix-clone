const VideoTitle = ({mainMovie})=>{
    const {title,overview}=mainMovie;
    return (
        <>
        <div className="pt-36 px-12">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/2">{overview}</p>
        <div>
            <button className="bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg"> ▶️ Play  </button>
            <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">More info</button>
        </div>
        </div>
        </>
    )
}
export default VideoTitle;