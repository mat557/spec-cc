import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const blogSlice = createApi({
    reducerPath : 'blog',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://spc-cc-server.vercel.app/api/v1/app/user',
        // baseUrl : 'http://localhost:5001/api/v1/app/user',
    }),
    endpoints : builder =>({})
})


export default blogSlice;