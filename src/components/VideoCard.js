import { useEffect } from "react"
import { YOUTUBE_API_KEY } from "../Utilis/Constant/Constant"


const VideoCard = ({video}) => {
    
    console.log(video)

    const {snippet,statistics} =video
    
    const {channelTitle,title,thumbnails} =snippet
    


    return (
        <div className="p-2 m-4 w-[280px] h-[380px]  shadow-lg rounded-lg bg-gray-200">
            <div>
                <img src={snippet?.thumbnails.medium.url} alt="" />
            </div>
            <div className=" flex pt-2 m-1">
                <div className="w-2/12 pt-1">
                    <img className="h-8" src="data:image/png;base64,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" alt="" />
                </div>
                <div className="w-10/12">
                    <ul>
                        <li className="font-bold">{title}</li>
                        <li>{channelTitle}</li>
                        <li>{statistics.viewCount} Views</li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default VideoCard