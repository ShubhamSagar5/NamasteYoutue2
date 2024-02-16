import { createSlice } from "@reduxjs/toolkit";




const CacheSlice = createSlice({
    name:'cache',
    initialState:{

    },
    reducers:{
        addCache:(state,action)=>{
            state = Object.assign(state,action.payload)
         
        }
    }
})

export const {addCache} = CacheSlice.actions
export default CacheSlice.reducer