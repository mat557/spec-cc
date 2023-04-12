import {configureStore} from "@reduxjs/toolkit";
import apiSlice from "../pages/feature/api/apiSlice";
import authSlice from "../pages/feature/auth/authSlice";
import courseSlice from "../pages/feature/course/courseSlice";
import blogSlice from "../pages/feature/blog/blogSlice";

const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]    : apiSlice.reducer, 
        [blogSlice.reducerPath]   : blogSlice.reducer,
        [courseSlice.reducerPath] : courseSlice.reducer, 
        auth : authSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        apiSlice.middleware,
        blogSlice.middleware,
        courseSlice.middleware,
    ),
});


export default store;