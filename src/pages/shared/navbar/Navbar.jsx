import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars , FaWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { logOut } from '../../feature/auth/authSlice';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const {email} = useSelector((state)=> state.auth);
    const dispatch = useDispatch();



    const checkOpen = () =>{
        setIsOpen(!isOpen);
    }

    const sigNOut = () =>{
      signOut(auth).then(()=>{
        dispatch(logOut());
      });
    }


  return (
    <div className='container'>
        <div className='container-tag'>Spectrum<div className='bottom'><span></span></div></div>
        {isOpen ? <FaBars className='tag' onClick={()=>checkOpen()}></FaBars> : <FaWindowClose className='tag'  onClick={()=>checkOpen()}></FaWindowClose>}
        <ul className={isOpen ? 'links ' : 'links active'}>
            <li><Link onClick={()=>setIsOpen(true)}  to='/' className='link'>Home</Link></li>
            <li><Link onClick={()=>setIsOpen(true)} to='/Courses' className='link'>Courses</Link></li>
            <li>Teachers</li>
            <li>Blogs</li>
            <li>Feed</li>
            <li><Link onClick={()=>setIsOpen(true)} to='/dashboard' className='link'>Dashboard</Link></li>
            {/* <li><Link onClick={()=>setIsOpen(true)} to='/signin' className='link'>Sign up</Link></li> */}
            {email ?  <button className='link-btn link' onClick={()=>sigNOut()}>Sign Out</button>: <li><Link onClick={()=>setIsOpen(true)} to='/signin' className='link'>Sign up</Link></li>}
        </ul>
    </div>
  )
}

export default Navbar