import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../Utilis/ReduxStore/ChatSlice"
import { randomMessageGenerator, randomNameGenerator } from "../Utilis/HelperFunction"


const LiveChat = () => {
    
    const dispatch = useDispatch()
    const chatMess = useSelector((store)=>store?.chat?.message)

    const [liveText,setLiveText] = useState('')


    useEffect(()=>{
        const timer = setInterval(()=>{
            dispatch(addMessage(
                {
                    name:randomNameGenerator(),
                    message:randomMessageGenerator(10)
                }
            ))
        },1500)


        return () => {
            clearInterval(timer)
        }
    },[])
    
    
    
    
    return (
        <div className="ml-2 p-3 border border-black h-[448px] rounded-lg  bg-white">
            <div className=" w-full h-[380px]  overflow-y-scroll no-scrollbar flex flex-col-reverse">
           {
            chatMess?.map((c,index)=><ChatMessage name={c.name} message={c.message+"🙏"}/>)
           }
           
            
        
            
</div>
<form action="" className="p-2" onSubmit={(e)=>{

e.preventDefault()
    dispatch(addMessage({
        name:"Shubham",
        message:liveText
    }))
    setLiveText('')
}} >
    <input type="text" value={liveText} onChange={(e)=> setLiveText(e.target.value)} className="border border-black w-[250px] rounded-lg p-1"/>
           <button className="px-3 mx-4 py-2 bg-green-200 rounded-lg">Send</button>
</form>
        </div>
        
    )
}


export default LiveChat