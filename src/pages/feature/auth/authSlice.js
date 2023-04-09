import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword , GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import auth from '../../../firebase.init';

const initialState = {
    user : {
        _id   : "",
        name  : "",
        email : "",
        role  : "",
        token : "",
        number: "",
        id    : "",
    },
    isLoading:true,
    isError:false,
    error:""
};


export const createUser = createAsyncThunk("auth/createUser" , async({email,password})=>{
    const data = await createUserWithEmailAndPassword(auth,email,password);
    return data.user.email;
})


export const logInUser = createAsyncThunk("auth/logInUser",async({email,password}) => {
    const data = await signInWithEmailAndPassword(auth,email,password);
    return data.user.email;
})


export const googleLogin = createAsyncThunk("auth/googleLogin",async() => {
    const authProvider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth,authProvider);
    return data.user.email;
})


export const getSingleUser = createAsyncThunk("auth/getSingleUser", async(email)=>{
    // const result = await fetch(`https://spc-cc-server.vercel.app/api/v1/app/user/${email}`);
    const result = await fetch(`http://localhost:5001/api/v1/app/user/${email}`);
    const data = await result.json();
    return data;
})


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logOut:(state)=>{
            state.user._id = "";
            state.user.email = "";
            state.user.number = "";
            state.user.role = "";
            state.user.token = "";
            state.user.name = "";
            state.user.id = "";
        },
        setUser:(state,{payload})=>{
            state.user.email = payload;
            state.isLoading = false;
        },
        toggleError:(state)=>{
            state.isError = false;
        },
        toggleLoading:state =>{
            state.isLoading = false;
        }
    },
    extraReducers: builder =>{
        builder
        .addCase(createUser.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = ""
        })

        .addCase(createUser.fulfilled,(state,{payload})=>{
            state.isLoading = false;
            state.user.email = payload;
            state.isError = false;
            state.error = "";
        })

        .addCase(createUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.user.email = "";
            state.isError = true;
            state.error = action.error.message;
        })

        .addCase(logInUser.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = ""
        })

        .addCase(logInUser.fulfilled,(state,{payload})=>{
            state.isLoading = false;
            state.user.email = payload;
            state.isError = false;
            state.error = "";
        })

        .addCase(logInUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.user.email = "";
            state.isError = true;
            state.error = action.error.message;
        })

        .addCase(googleLogin.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = ""
        })

        .addCase(googleLogin.fulfilled,(state,{payload})=>{
            state.isLoading = false;
            state.user.email = payload;
            state.isError = false;
            state.error = "";
        })

        .addCase(googleLogin.rejected,(state,action)=>{
            state.isLoading = false;
            state.user.email = "";
            state.isError = true;
            state.error = action.error.message;
        })
        .addCase(getSingleUser.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = ""
        })

        .addCase(getSingleUser.fulfilled,(state,{payload})=>{
            state.isLoading = false;
            state.user = payload;
            state.isError = false;
            state.error = "";
        })

        .addCase(getSingleUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.user.email = "";
            state.isError = true;
            state.error = action.error.message;
        });

    }
});

export const { logOut , setUser , toggleError , toggleLoading } = authSlice.actions;

export default authSlice.reducer;