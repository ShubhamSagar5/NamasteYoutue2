import Comment from "./Comment"
import CommentList from "./CommentList"

const commentsData = [
    {
        name:"Akshay Saini",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
        replies:[
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
                    {
                        name:"Akshay Saini",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                        replies:[
                            {
                                name:"Akshay Saini",
                                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                                replies:[
                        
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
                    {
                        name:"Akshay Saini",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                        replies:[
                            {
                                name:"Akshay Saini",
                                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                                replies:[
                        
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name:"Akshay Saini",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
        replies:[
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
        
                ]
            },
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
        
                ]
            },
        ]
    },
    {
        name:"Akshay Saini",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
        replies:[
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
        
                ]
            },
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
        
                ]
            },
        ]
    },
    {
        name:"Akshay Saini",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
        replies:[
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
        
                ]
            },
            {
                name:"Akshay Saini",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In quisquam, eaque deleniti corporis laboriosam accusantium a, animi, laborum sit!",
                replies:[
        
                ]
            },
        ]
    },
   
]
 
const CommentsContainer = () => {
    return (
        <div className="m-5 p-2 w-[63%]">
            <h1 className="text-2xl font-bold">Comments:</h1>
            <CommentList comments={commentsData}/>
        </div>
    )
}


export default CommentsContainer