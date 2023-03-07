import {configureStore} from "@reduxjs/toolkit";
import apiSlice from "../pages/feature/api/apiSlice";
import authSlice from "../pages/feature/auth/authSlice";
import courseSlice from "../pages/feature/course/courseSlice";

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath] : apiSlice.reducer, 
        [courseSlice.reducerPath] : courseSlice.reducer, 
        auth : authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(courseSlice.middleware),
});


export default store;