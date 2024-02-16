import { configureStore } from "@reduxjs/toolkit";

import appSliceReducer from './appSlice'
import CacheSlice from "./CacheSlice";


const Store = configureStore({

    reducer:{
        app:appSliceReducer,
        cache:CacheSlice
    }
})

export default Store