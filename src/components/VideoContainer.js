import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_API } from "../Utilis/Constant/Constant"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"


const VideoContainer = () => {
    
    const [videosData ,setVideosData] = useState([])


    const getVideos = async() => {
        const data = await fetch(YOUTUBE_VIDEO_API)
        const json = await data.json()
       setVideosData(json.items)
    }


    useEffect(()=>{
        getVideos()
    },[])
    
   
    return (
        <div className="flex flex-wrap gap-3 m-5">
        {
            videosData?.map((video)=> <Link to={'/watch?v='+video.id}><VideoCard key={video.id} video={video}/></Link>)
        }
           
        </div>
    )
}

export default VideoContainer