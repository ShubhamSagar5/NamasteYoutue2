import { useSelector } from "react-redux"


const SideBar = () => {
    
    const isSideBarMenuOpen = useSelector((store)=>store.app.sideBarMenu)
    
    if(!isSideBarMenuOpen) return null
    
    return (
        <div className="p-2 shadow-lg w-[180px]">
            <div className="p-2 border border-b-gray-500">
                <h2>SubScription</h2>
                <ul>
                    <li>PW</li>
                    <li>Apana College</li>
                    <li>Code with Harry</li>
                    <li>Akshay Saini</li>
                    <li>Tannay Pratap</li>
                </ul>
            </div>
            <div className="p-2 border border-b-gray-500">
                <h2>SubScription</h2>
                <ul>
                    <li>PW</li>
                    <li>Apana College</li>
                    <li>Code with Harry</li>
                    <li>Akshay Saini</li>
                    <li>Tannay Pratap</li>
                </ul>
            </div>
            <div className="p-2 border border-b-gray-500">
                <h2>SubScription</h2>
                <ul>
                    <li>PW</li>
                    <li>Apana College</li>
                    <li>Code with Harry</li>
                    <li>Akshay Saini</li>
                    <li>Tannay Pratap</li>
                </ul>
            </div>
            <div className="p-2 border border-b-gray-500">
                <h2>SubScription</h2>
                <ul>
                    <li>PW</li>
                    <li>Apana College</li>
                    <li>Code with Harry</li>
                    <li>Akshay Saini</li>
                    <li>Tannay Pratap</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar