import apiSlice from "./apiSlice";


const authApi = apiSlice.injectEndpoints({
    endpoints : ( builder ) => ({
        register : builder.mutation({
            query : (data) =>({
                method : "PUT",
                url : "/addUser",
                body : data,
            }),
        }),


        getAllUser : builder.query ({
            query : () =>({
                url  : '/'
            })
        }),

        promoteUserToBlogger : builder.mutation({
            query : (email) =>({
                method : "POST",
                url : `/promote/blogger/${email}`,
            }),

        }),

        getStudentById : builder.query({
            query : (id) =>({
                url : `/student/enrolled/${id}`
            }),
        }),

        insertUserMarks : builder.mutation({
            query  : ({tag,len,marks}) =>({
                key: 'insertUserMarks',
                url      : `/insert/course/mark/${tag}/${len}`,
                method   : "POST",
                headers  : {
                    'content-type' : 'application/json',
                },
                body     : JSON.stringify(marks)
            })
        }),

    }),
});

export const { useRegisterMutation , useGetAllUserQuery , usePromoteUserToBloggerMutation , useGetStudentByIdQuery , useInsertUserMarksMutation } = authApi;