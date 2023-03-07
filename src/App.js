import { Route, Routes } from "react-router-dom";
import Signin from "./pages/authenticate/signIn/Signin";
import Signup from "./pages/authenticate/signUp/Signup";
import Home from "./pages/home/Home";
import Navbar from "./pages/shared/navbar/Navbar";
import DashBooard from "./pages/dashboard/DashBooard";
import Profile from "./pages/dashboard/profile/Profile";
import Users from "./pages/dashboard/users/Users";
import auth from "./firebase.init";
import Course from "./pages/dashboard/addUpDelCourse/Course";
import Courses from "./pages/courses/Courses";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getSingleUser, toggleLoading } from "./pages/feature/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import  { Toaster } from 'react-hot-toast';
import RequireAuth from "./pages/shared/RequireAuth";
import { useRegisterMutation } from "./pages/feature/api/authApi";



function App() {
  const dispatch = useDispatch();
  const [ postUser , { isLoading , isError }] = useRegisterMutation();
  const { user } = useSelector(state => state.auth);

  useEffect(()=>{
    onAuthStateChanged(auth, (userr)=>{
      if(userr){
        dispatch(getSingleUser(userr.email));
        //   const userSdata = {
        //     name : userr.displayName,
        //     phone : `${userr.phoneNumber}`,
        //     email :userr.email
        //   }
        //   console.log(userSdata)
        //   dispatch(postUser(userSdata));
        // }
      }else{
        dispatch(toggleLoading());
      }
    })
  },[])

  
  return (
    <div style={{maxWidth:"1400px",margin:"0 auto"}}>
      <Toaster></Toaster>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="dashboard" element={<RequireAuth><DashBooard></DashBooard></RequireAuth>}>
              <Route index element={<Profile></Profile>}></Route>
              <Route path="users" element={<Users></Users>}></Route>
              <Route path="manageCourse" element={<Course></Course>}></Route>
            </Route>
            <Route path="courses" element={<Courses></Courses>}></Route>
            <Route path="signin" element={<Signin></Signin>}></Route>
            <Route path="signup" element={<Signup></Signup>}></Route>
        </Routes>
    </div>
  );
}

export default App;
