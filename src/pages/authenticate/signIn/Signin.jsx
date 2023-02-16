import React, { useState } from 'react';
import './SingIn.css';
import { FaRegUserCircle , FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, redirect, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loder from '../../shared/loder/Loder';

const Signin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [err,setErr] = useState(true);
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    let errorMessage;

    if(loading){
      return <Loder></Loder>
    }

    if(error){
      errorMessage = <p>{error.message}</p>
    }

    if(user){
      navigate('/dashboard');
    }

    
    const onSubmit = data => {
      signInWithEmailAndPassword(data.email,data.password);
    };

  return (
    <div className='login-page'>
      {errorMessage}
        <div className='card'>
            <FaRegUserCircle className='log-icon'></FaRegUserCircle>
            <h2 style={{color:"white"}}>Sign In</h2>
            <form className='card-form' onSubmit={handleSubmit(onSubmit)}>
                <input className='in' placeholder='Enter your emaiL' {...register("email", { required: true })} />
                <input className='in' placeholder='Enter your password' {...register("password", { required: true })} />
                

                  {errors.email  && <span className='err-tag'>Email is required</span>}
                  {errors.password && <span className='err-tag'>Password is required</span>}
                  
               
                <input className='input-btn' type="submit" />
                <button className='input-btn' style={{color:"white"}} type="submit" >Google Sign In</button>
                <Link style={{color:"teal",marginTop:"5px",marginBottom:"10px"}} to='/signup'>Don't have an account?Please sign up!</Link>
                {/* <input className='google-btn' type="submit" ><FaGoogle></FaGoogle></input> */}
            </form>
        </div>
    </div>
  )
}

export default Signin;