import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


const courseSlice = createApi({
    reducerPath : "course",
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://spc-cc-server.vercel.app/api/v1/app/user',
    }),
    tagTypes : ['post'],
    endpoints : (builder) => ({}),
});

export default courseSlice;