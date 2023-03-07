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
    }),
});

export const { useRegisterMutation } = authApi;