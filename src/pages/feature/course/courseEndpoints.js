import { getSingleUser } from "../auth/authSlice";
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

        updateCourse : builder.mutation({
            query : ({tag,info}) =>({
                url: `/update/course/${tag}`,
                method: 'PUT',
                body: info
            }),
            async onQueryStarted(tag, { dispatch, queryFulfilled }){
                try{
                    const { data: updatedCourse } = await queryFulfilled;

                    dispatch(
                        courseSlice.util.updateQueryData('getAllCourses', undefined , (draft) => {
                          
                          const courses = draft?.find((course) => course?._id === tag?.tag);

                          courses.subject = tag?.info.subject;
                          courses.classNumber = tag?.info?.classNumber;
                          courses.exams =tag?.info?.exams;
                          courses.assignment =tag?.info?.assignment;
                          courses.fee =tag?.info?.fee;
                          courses.imge = tag?.info?.imge;
                          courses.description = tag?.info?.description;

                        })
                      )
                      
                }catch(err){
                    console.log(err);
                }
            }
        }),

        enroleCourse : builder.mutation({
            query : ({email,id}) =>({
                url    : `/course/enrole/${email}`,
                method : 'POST',
                headers: {
                    'content-type' : 'application/json',
                },
                body   : id,
            }),

            async onQueryStarted(email,{ dispatch, queryFulfilled }){
                try{
                    await queryFulfilled;
                    dispatch(getSingleUser(email?.email));
                }catch(err){
                    console.log(err)
                }
            }
        })


    })
})


export const { 
        useGetAllCoursesQuery , 
        useGetSingleCourseQuery , 
        usePostCourseMutation , 
        useDeleteCourseMutation , 
        useUpdateCourseMutation ,
        useEnroleCourseMutation ,
    } = courseEndpoints;