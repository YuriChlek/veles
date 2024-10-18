import {configureStore} from "@reduxjs/toolkit";
import adminReducer from './slices/adminUser'

let store = configureStore({
    reducer: {
        admin: adminReducer
    }
})

export default store;
