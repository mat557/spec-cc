import React, { useEffect } from 'react';
import '../signIn/SingIn.css';
import { FaRegUserCircle , FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import Loder from '../../shared/loder/Loder';


const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [createUserWithEmailAndPassword,user,loading,error ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    

  console.log(user);
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
      createUserWithEmailAndPassword(data.email,data.password);
      const details = {
        name : data?.name,
        number : data?.number,
        email : data?.email
      }
        fetch(`http://localhost:5001/api/v1/app/user/addUser`,{
            method : 'PUT',
            headers : {
                'content-type':'application/json',
            },
            body: JSON.stringify(details)
        })
        .then(res => res.json())
        .then(data=>{
          console.log(data)
        })
    };


    return (
    <div className='login-page'>
        <div className='card'>
            <FaRegUserCircle className='log-icon'></FaRegUserCircle>
            <h2 style={{color:"white"}}>Sign Up</h2>
            <form className='card-form' onSubmit={handleSubmit(onSubmit)}>
                <input className='in' placeholder='Enter your name'{...register("name")} />
                <input className='in' placeholder='Enter your number' type='number' {...register("number")} />
                <input className='in' placeholder='Enter your email' type='email' {...register("email", { required: true })} />
                <input className='in' placeholder='Enter your Password' type='password' {...register("password", { required: true })} />
                {errors.email && <span className='err-tag'>Email is required</span>}
                {errors.password && <span className='err-tag'>Password is required</span>}
                
                <input className='input-btn' type="submit" />
                <button className='input-btn' style={{color:"white"}} type="submit" >Google Signin</button>
                <Link style={{color:"teal",marginTop:"5px",marginBottom:"10px"}}  to='/signin'>Already have an account?Please sign in!</Link>
                {/* <input className='google-btn' type="submit" ><FaGoogle></FaGoogle></input> */}
            </form>
        </div>
    </div>
  )
}

export default Signup;