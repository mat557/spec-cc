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
        query : ({ data }) =>({
            url    : `/delete/blog/${data._id}`,
            method : 'DELETE',
        }),
        async onQueryStarted( data , { dispatch, queryFulfilled } ){ 
          
          try{ 
            await queryFulfilled; 
            dispatch( blogSlice.util.updateQueryData('getBlog', data.id , (draft) =>{ 
              console.log(draft,data)
              return draft?.filter((course) => course._id !== data._id);   
                
              })
            )}
            catch(err){ 
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
    }),



    // for feed

    getFeedItemCOunt : builder.query({
      query : () =>({
          url   : '/count/feed',
      })
    }),

    getReplyItemCunt : builder.query({
      query : (id) =>({
          url   : `/count/comment/${id}`,
      })
    }),

    getFeedItem : builder.query({
      query : ({page,size}) =>({
          url   : `/question/feed?page=${page}&size=${size}`,
      })
    }),

    postQuestion : builder.mutation({
      query: (data) => ({
        url    : '/feed/question',
        method : "POST",
        headers:{
            'content-type' : 'application/json',
        },
        body   : JSON.stringify(data),
      }),
    }),



    getFeedReply : builder.query({
      query : ({idForModal}) =>({
          url   : `/reply/question/${idForModal}`,
      })
    }),

    postAnswer : builder.mutation({
      query: ({idForModal,answerForPost}) => ({
        url    : `/feed/answer/${idForModal}`,
        method : "POST",
        headers:{
            'content-type' : 'application/json',
        },
        body   : JSON.stringify(answerForPost),
      }),
    }),



  }),
})

export const {  useGetBlogQuery , 
                useGetSingleBlogQuery , 
                usePostBlogMutation , 
                useDeleteBlogMutation , 
                useUpdateBLogMutation , 
                useGetReactResponseQuery ,
                useGetFeedItemCOuntQuery,
                useGetReplyItemCuntQuery,
                useGetFeedItemQuery,
                usePostQuestionMutation,
                usePostAnswerMutation,
                useGetFeedReplyQuery
              } = blogsEndpoints;