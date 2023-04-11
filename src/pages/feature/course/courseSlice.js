import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


const courseSlice = createApi({
    reducerPath : "course",
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://spc-cc-server.vercel.app/api/v1/app/user',
        // baseUrl : 'http://localhost:5001/api/v1/app/user',
    }),
    endpoints : (builder) => ({}),
});

export default courseSlice;