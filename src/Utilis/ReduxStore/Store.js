import { configureStore } from "@reduxjs/toolkit";

import appSliceReducer from './appSlice'
import CacheSlice from "./CacheSlice";
import ChatSlice from "./ChatSlice";


const Store = configureStore({

    reducer:{
        app:appSliceReducer,
        cache:CacheSlice,
        chat:ChatSlice
    }
})

export default Store