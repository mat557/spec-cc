import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router";
import Loder from "./loder/Loder";


const RequireAuth = ({ children }) =>{
    const { isLoading , user } = useSelector(state => state.auth);
    const  pathname = useLocation();



    if(isLoading){
        return <Loder></Loder>
    }

    if(!user.email){
        return <Navigate to='/signin' state={{ path : pathname }} ></Navigate>
    }

    return children;
}

export default RequireAuth;