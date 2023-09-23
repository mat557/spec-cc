import blogSlice from "../blog/blogSlice";


const commentEndpoints = blogSlice.injectEndpoints({
    endpoints : (builder) =>({

        getTotalDocument : builder.query({
            query : () =>({
                url : '/comment/count',
            })
        }),

        getComment : builder.query({
            query : (page) => ({    
                url : `/comment/getcomment/${page}`,
                method : 'GET'
            })
        }),

        postSingleComment : builder.mutation({
            query : (credentials) => ({    
                url : '/comment',
                method : 'POST',
                headers:{
                    'content-type' : 'application/json',
                },
                body : JSON.stringify(credentials)
            }),

        }),

    })
})

export const {
    useGetTotalDocumentQuery,
    useGetCommentQuery,
    usePostSingleCommentMutation
} = commentEndpoints



// export const {
//     useGetCommentQuery
// } = commentEndpoints