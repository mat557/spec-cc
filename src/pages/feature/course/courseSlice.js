import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


const courseSlice = createApi({
    reducerPath : "course",
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:5001/api/v1/app/user',
    }),
    tagTypes : ['post'],
    endpoints : (builder) => ({}),
});

export default courseSlice;