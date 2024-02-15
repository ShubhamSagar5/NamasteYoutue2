import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../Utilis/ReduxStore/appSlice"
import { useSearchParams } from "react-router-dom"
import { YOUTUBE_API_KEY } from "../Utilis/Constant/Constant"



const WatchPage = () => {
    
    const dispatch = useDispatch()

    const [searchParams] = useSearchParams()
    const videoId = searchParams.get('v')
   
    console.log(videoId)

    // GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=[YOUR_API_KEY] HTTP/1.1


    const getVideo = async() => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=dEolScqI9_Y&key="+YOUTUBE_API_KEY)
        const json = await data.json()
console.log(json)
        // dEolScqI9_Y
    
    }

    useEffect(()=>{
        dispatch(closeMenu())
        getVideo()
    },[])
    
    
    return (
        <div className="p-2 mt-2 bg-gray-200 mx-10 ">
          <div className="flex p-2 m-2">
            <div>
            <iframe className=" rounded-lg" width="796" height="448" src={"https://www.youtube.com/embed/"+videoId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>
            <div>
                livechat
            </div>
          </div>
        </div>
    )
}


export default WatchPage