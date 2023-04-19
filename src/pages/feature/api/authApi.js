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

    }),
});

export const { useRegisterMutation , useGetAllUserQuery , usePromoteUserToBloggerMutation } = authApi;