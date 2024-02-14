import { configureStore } from "@reduxjs/toolkit";

import appSliceReducer from './appSlice'


const Store = configureStore({

    reducer:{
        app:appSliceReducer
    }
})

export default Store