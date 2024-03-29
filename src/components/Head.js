import { useDispatch, useSelector } from "react-redux";
import { toggleSideBarMenu } from "../Utilis/ReduxStore/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../Utilis/Constant/Constant";
import { addCache } from "../Utilis/ReduxStore/CacheSlice";

const Head = () => {
  
  const dispatch = useDispatch()
  const searchCache = useSelector((store)=>store.cache)

  const [searchText,setSearchText] = useState('')
  const [searchSuggestionShow,setSearchSuggestionShow] = useState(false)
  const [searchList,setSearchList] = useState([])

    const handleSideBarMenu = () => {
    console.log("first")
    dispatch(toggleSideBarMenu())
  }

  const getSuggestionlist = async() => {
    console.log("api called")
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API+searchText)
    const json = await data.json()
    setSearchList(json[1])

    dispatch(addCache({
      [searchText]:json[1]
    }))
    
  }

  

  useEffect(()=>{
   
    const timer  = setTimeout(()=> {
      if(searchCache[searchText]){
        setSearchList(searchCache[searchText])
      }else{
        
         getSuggestionlist()
         
      }
      
     
      
    },200) 


    return () => {
      clearTimeout(timer)
    }
   
  },[searchText])
  
    return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1 h-8">
        <img className=" cursor-pointer"
        onClick={handleSideBarMenu}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
          alt="menu"
        />
   <a href="/">
         <img
        className="px-2 ml-2 cursor-pointer h-7"
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          alt="youtube logo"
        /></a>
        
      </div>
      <div className="col-span-10 h-10 flex flex-col ml-[200px]">
           <div className="w-[100%] h-10 flex   ">
        <input type="text" className="px-5 py-[2px] w-[50%] h-8 border border-gray-600 rounded-l-full" onChange={(e) => setSearchText(e.target.value)} onFocus={()=> setSearchSuggestionShow(true)} onBlur={()=>setSearchSuggestionShow(false)} value={searchText}/>
        <button className="h-8 bg-gray-200 px-[14px] border border-gray-600 rounded-r-full"> 🔍</button>
      </div>
      { searchSuggestionShow && <div className="p-2 m-1 mt-[35px] bg-gray-100 w-[31%] rounded-lg absolute">
    
         <ul>
         {
          searchList?.map((s)=><li key={s} className=" shadow-lg  hover:bg-gray-300 p-2 px-2 border border-gray-300 rounded-lg mt-1">🔍 {s}</li>)
         } 
          
        </ul>
   
      </div>}

      </div>
   
      <div className=" col-span-1 ">
    <img className="h-8" src="data:image/png;base64,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" alt="" />
      </div>
    </div>
  );
};

export default Head;
