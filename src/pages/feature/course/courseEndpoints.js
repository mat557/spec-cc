import courseSlice from "./courseSlice";

const courseEndpoints = courseSlice.injectEndpoints({
    endpoints : (builder) =>({

        getAllCourses : builder.query({
            query: () => ({
                url : '/courses/all',
            }),
        }),

        getSingleCourse : builder.query({
            query : (id) =>({
                url : `/course/find/${id}`
            })
        }),
      
        postCourse : builder.mutation({
            query : (data) =>({
                method: 'PUT',
                url: '/addCourse',
                body: data,
                headers :{
                    "content-type" : "application/json",
                },
            }),
            async onQueryStarted( data , { dispatch, queryFulfilled } ){
                try{
                    const res = await queryFulfilled;

                    dispatch(
                        courseSlice.util.updateQueryData('getAllCourses' , undefined , (draft) => {
                        draft?.push(data)
                  }))
                }catch(err){
                    console.log(err)
                }
            }
        }),

        deleteCourse : builder.mutation({
            query : (data) => ({
                url : `/delete/post/${data?._id}`,
                method : 'DELETE',
            }),
            async onQueryStarted( data , { dispatch, queryFulfilled } ){
                try{
                    await queryFulfilled;

                    dispatch(
                        courseSlice.util.updateQueryData('getAllCourses', undefined , (draft) => {
                            return draft?.filter((course) => course._id !== data._id);
                        })
                    )

                }catch(err){
                    console.log(err);
                }
            }
        }),

        // updateCourse : builder.mutation({
            
        // })


    })
})


export const { useGetAllCoursesQuery , useGetSingleCourseQuery , usePostCourseMutation , useDeleteCourseMutation , useUpdateCourseMutation } = courseEndpoints;