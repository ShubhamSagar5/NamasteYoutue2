import Button from "./Button"





const ButtonList = () => {
   
    const list =['All','Music','Chants','Satsang','Rituals','News','Live','javaScript','java','Podcasts','Tests','Lectures','Physics','DairyFarming','Cars','RecentlyUploaded','Watched']
   
    return (
        <div className=" flex w-[99%] overflow-x-scroll no-scrollbar">
        {
            list.map((name,index)=> <Button key={index} btnName={name}/>)
        }
           
        </div>
    )
}


export default ButtonList