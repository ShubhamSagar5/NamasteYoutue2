import { createSlice } from "@reduxjs/toolkit";



const appSlice = createSlice({
    name:'app',
    initialState:{
        sideBarMenu:true
    },
    reducers:{
        toggleSideBarMenu:(state)=>{
            state.sideBarMenu = !state.sideBarMenu
        },
        closeMenu:(state)=>{
            state.sideBarMenu = false
        }
    }
})


export const {toggleSideBarMenu,closeMenu} = appSlice.actions
export default appSlice.reducer