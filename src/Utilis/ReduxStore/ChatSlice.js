import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_COUNT } from "../Constant/Constant";


const ChatSlice = createSlice({
    name:'chat',
    initialState:{
        message:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.message.splice(OFFSET_LIVE_COUNT,1)
            state.message.unshift(action.payload)
        }
    }
})



export const {addMessage} = ChatSlice.actions
export default ChatSlice.reducer