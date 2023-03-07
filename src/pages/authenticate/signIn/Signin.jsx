import React, { useEffect } from 'react';
import './SingIn.css';
import { FaRegUserCircle } from "react-icons/fa";
import { useForm} from "react-hook-form";
import { Link,useNavigate } from 'react-router-dom';
import { googleLogin, logInUser, toggleError } from '../../feature/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loder from '../../shared/loder/Loder';
import { toast } from 'react-hot-toast';

const Signin = () => {
    const { register, handleSubmit, watch, formState: { errors } ,reset} = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user : { email } ,isLoading,isError,error } = useSelector(state => state.auth);




    useEffect(()=>{
      if(!isLoading && email){
        navigate("/dashboard");
      }
    },[isLoading,email]);


      
    useEffect(()=>{
      if(isError){
        toast.error(error,{ 
          position: 'top-center',
          duration: 4000,
          style: {
            marginTop: '70px',
          },
        })
        dispatch(toggleError());
      }
    },[isError,error]);



    
    const onSubmit = ({email,password}) => {
      dispatch(logInUser({email,password}));
      reset();
    };

    const handleLogInwithGoogle = () =>{
      dispatch(googleLogin());
    }

  return (
    <div className='login-page'>
        <div className='card'>
            <FaRegUserCircle className='log-icon'></FaRegUserCircle>
            <h2 style={{color:"white"}}>Sign In</h2>
              <form className='card-form' onSubmit={handleSubmit(onSubmit)}>
                  <input className='in' placeholder='Enter your emaiL' {...register("email", { required: true })} />
                  <input className='in' placeholder='Enter your password' type="password" {...register("password", { required: true })} />
                  
                    {errors.email  && <span className='err-tag'>Email is required</span>}
                    {errors.password && <span className='err-tag'>Password is required</span>}
                    
                
                  <input className='input-btn' type="submit" />
                  <Link style={{color:"teal",marginTop:"5px",marginBottom:"10px"}} to='/signup'>Don't have an account?Please sign up!</Link>
              </form>
                {/* <button className='input-btn' style={{color:"white"}} onClick={handleLogInwithGoogle}  >Login With Google</button> */}
        </div>
    </div>
  )
}

export default Signin;