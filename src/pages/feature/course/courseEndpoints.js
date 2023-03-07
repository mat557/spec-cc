import courseSlice from "./courseSlice";

const courseEndpoints = courseSlice.injectEndpoints({
    endpoints : (builder) =>({

        getAllCourses : builder.query({
            query: () => ({
                url : '/courses/all',
            }),
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
                    console.log("The arg",data)
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
        })


    })
})


export const { useGetAllCoursesQuery , usePostCourseMutation , useDeleteCourseMutation } = courseEndpoints;



// getAllCourses : builder.query({
//     query: () => ({
//         method: 'GET',
//         url : '/courses'
//     }),
// }),

// postCourse : builder.mutation({
//     query : (data) =>({
//         method: 'PUT',
//         url: '/addCourse',
//         body: data,
//         headers :{
//             "content-type" : "application/json",
//         },
//     }),
// }),