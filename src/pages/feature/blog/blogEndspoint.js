import blogSlice from "./blogSlice"

const blogsEndpoints = blogSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    getBlog : builder.query({
        query : () =>({
            url   : '/collection/blog',
        })
    }),
    
    postBlog : builder.mutation({
      query: (data) => ({
        url    : '/blog/post',
        method : "POST",
        headers:{
            'content-type' : 'application/json',
        },
        body   : JSON.stringify(data),
      }),



    }),

    deleteBlog : builder.mutation({
        query : ({ id }) =>({
            url    : `/delete/blog/${id}`,
            method : 'DELETE',
        }),
    }),

  }),
})

export const { useGetBlogQuery , usePostBlogMutation , useDeleteBlogMutation } = blogsEndpoints;