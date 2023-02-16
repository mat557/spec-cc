import { Route, Routes } from "react-router-dom";
import Signin from "./pages/authenticate/signIn/Signin";
import Signup from "./pages/authenticate/signUp/Signup";
import Home from "./pages/home/Home";
import Navbar from "./pages/shared/navbar/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import DashBooard from "./pages/dashboard/DashBooard";
import Profile from "./pages/dashboard/profile/Profile";
import Users from "./pages/dashboard/users/Users";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import Course from "./pages/dashboard/addUpDelCourse/Course";


function App() {
  // const [user, loading, error] = useAuthState(auth);
  // console.log(user)

  
  return (
    <div style={{maxWidth:"1400px",margin:"0 auto"}}>
      <Provider store={store}>
        <Navbar></Navbar>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="dashboard" element={<DashBooard></DashBooard>}>
              <Route index element={<Profile></Profile>}></Route>
              <Route path="users" element={<Users></Users>}></Route>
              <Route path="manageCourse" element={<Course></Course>}></Route>
            </Route>
            <Route path="signin" element={<Signin></Signin>}></Route>
            <Route path="signup" element={<Signup></Signup>}></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
