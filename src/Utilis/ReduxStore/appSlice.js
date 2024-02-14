import { createSlice } from "@reduxjs/toolkit";



const appSlice = createSlice({
    name:'app',
    initialState:{
        sideBarMenu:true
    },
    reducers:{
        toggleSideBarMenu:(state)=>{
            state.sideBarMenu = !state.sideBarMenu
        }
    }
})


export const {toggleSideBarMenu} = appSlice.actions
export default appSlice.reducer