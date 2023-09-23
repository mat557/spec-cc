import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars , FaWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { logOut } from '../../feature/auth/authSlice';
import Loder from '../loder/Loder';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate() 
    const [isOpen,setIsOpen] = useState(true);
    const {user : {email} , isLoading} = useSelector((state)=> state?.auth);
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
        <div className="container-width">
          <div className='container-tag' onClick={()=>navigate('/')}>Spectrum<div className='bottom'><span></span></div></div>
          {isOpen ? <FaBars className='tag' onClick={()=>checkOpen()}></FaBars> : <FaWindowClose className='tag'  onClick={()=>checkOpen()}></FaWindowClose>}
          <ul className={isOpen ? 'links ' : 'links active'}>
              {/* <li><Link onClick={()=>setIsOpen(true)}  to='/' className='link'>Home</Link></li> */}
              <li><Link onClick={()=>setIsOpen(true)} to='/Courses' className='link'>Courses</Link></li>
              <li><Link onClick={()=>setIsOpen(true)} to='/blogs' className='link'>Blogs</Link></li>
              <li><Link onClick={()=>setIsOpen(true)} to='/feed' className='link'>Feed</Link></li>
              <li>About us</li>
              <li><Link onClick={()=>setIsOpen(true)} to='/dashboard' className='link'>Dashboard</Link></li>
              {email ?  <li><Link className='link' onClick={()=>sigNOut()}>Sign Out</Link></li>: <li><Link onClick={()=>setIsOpen(true)} to='/signin' className='link-btn link'>Sign up</Link></li>}
          </ul>
        </div>
    </div>
  )
}

export default Navbar