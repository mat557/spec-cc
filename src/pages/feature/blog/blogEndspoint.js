import blogSlice from "./blogSlice"

const blogsEndpoints = blogSlice.injectEndpoints({
  endpoints: (builder) => ({
    
    getBlog : builder.query({
        query : () =>({
            url   : '/collection/blog',
        })
    }),

    getSingleBlog : builder.query({
      query : (id) => ({
        url   : `/single/blog/${id}`,
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

        async onQueryStarted( data , { dispatch, queryFulfilled } ){
          try{
              dispatch(
                blogSlice.util.updateQueryData('getBlog' , undefined , (draft) => {
                  draft?.push(data)
            }))
            
            await queryFulfilled;

          }catch(err){
              console.log(err)
          }
      }
    }),



    deleteBlog : builder.mutation({
        query : ({ id }) =>({
            url    : `/delete/blog/${id}`,
            method : 'DELETE',
        }),
        async onQueryStarted( data , { dispatch, queryFulfilled } ){
          try{
              
              dispatch(
                blogSlice.util.updateQueryData('getBlog', undefined , (draft) => {
                      return draft?.filter((course) => course._id !== data.id);
                  })
              )
              await queryFulfilled;

          }catch(err){
              console.log(err);
          }
      }
    }),



    updateBLog : builder.mutation({
      query : ({tag,data}) =>({
          url: `/update/blog/${tag}`,
          method: 'PATCH',
          body: data
      }),
      async onQueryStarted(tag, { dispatch, queryFulfilled }){
          try{
              dispatch(
                blogSlice.util.updateQueryData('getBlog', undefined , (draft) => {
                    const courses = draft?.find((blog) => blog?._id === tag.tag);

                    courses.title       = tag?.data?.title;
                    courses.catagory    = tag?.data?.catagory;
                    courses.description = tag?.data?.description;
                  })
                )
                
                await queryFulfilled;

          }catch(err){
              console.log(err);
          }
      }
    }),


    getReactResponse : builder.query({
      query : ({email,id}) =>({
        url   : `/response/react/${email}/${id}`
      })
    })


  }),
})

export const {  useGetBlogQuery , 
                useGetSingleBlogQuery , 
                usePostBlogMutation , 
                useDeleteBlogMutation , 
                useUpdateBLogMutation , 
                useGetReactResponseQuery 
              } = blogsEndpoints;