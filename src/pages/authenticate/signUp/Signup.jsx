import React, { useEffect } from 'react';
import '../signIn/SingIn.css';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { createUser, googleLogin, toggleError } from '../../feature/auth/authSlice';
import { FaRegUserCircle } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import Loder from '../../shared/loder/Loder';
import { useRegisterMutation } from '../../feature/api/authApi';



const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } ,reset} = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { isLoading, user : { email } ,isError,error } = useSelector(state=> state.auth);
    const [ postUser , { isLoading1 , isError1 } ] = useRegisterMutation();


    useEffect(()=>{
      if(!isLoading && email){
        navigate("/dashboard");
      }
    },[isLoading,email]);

          

    useEffect(()=>{
      if(isError){
        toast.error(error,{ 
          position: 'top-center',
          duration: 3000,
          style: {
            marginTop: '70px',
          },
        });
        dispatch(toggleError());
      }
    },[isError,error]);

    if(isLoading){
      return <Loder></Loder>
    }

    const onSubmit = ({email,password,number,name}) => {
      dispatch(createUser({email,password}));
      postUser({email,number,name});
      reset();
    };

    const handleLogInWithGoogle = () =>{
      dispatch(googleLogin());
    }

    return (
    <div className='login-page'>
        <div className='card'>
            <FaRegUserCircle className='log-icon'></FaRegUserCircle>
            <h2 style={{color:"white"}}>Sign Up</h2>
            <form className='card-form' onSubmit={handleSubmit(onSubmit)}>
                <input className='in' placeholder='Enter your name'{...register("name")} />
                <input className='in' placeholder='Enter your number' type='number' {...register("number")} />
                <input className='in' placeholder='Enter your email' autoComplete="off" type='email' {...register("email", { required: true })} />
                <input className='in' placeholder='Enter your Password' autoComplete="off" type='password' {...register("password", { required: true })} />
                {errors.email && <span className='err-tag'>Email is required</span>}
                {errors.password && <span className='err-tag'>Password is required</span>}
                
                <input className='input-btn' type="submit" />
                <Link style={{color:"teal",marginTop:"5px",marginBottom:"10px"}}  to='/signin'>Already have an account?Please sign in!</Link>
            </form>
                {/* <button className='input-btn' style={{color:"white"}} onClick={handleLogInWithGoogle}>Login With Google</button> */}
        </div>
    </div>
  )
}

export default Signup;




// const details = {
//   name : data?.name,
//   number : data?.number,
//   email : data?.email
// }
//   fetch(`http://localhost:5001/api/v1/app/user/addUser`,{
//       method : 'PUT',
//       headers : {
//           'content-type':'application/json',
//       },
//       body: JSON.stringify(details)
//   })
//   .then(res => res.json())
//   .then(data=>{
//     console.log(data)
//   })