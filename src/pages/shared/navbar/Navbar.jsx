import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars , FaWindowClose } from "react-icons/fa";
import auth from '../../../firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import Loder from '../loder/Loder';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [signOut, loading1, error1] = useSignOut(auth);

    if(loading || loading1){
      return <Loder></Loder>
    }

    const checkOpen = () =>{
        setIsOpen(!isOpen);
    }
    const sigNOut = () =>{
      signOut();
    }



  return (
    <div className='container'>
        <div className='container-tag'>Spectrum<div className='bottom'><span></span></div></div>
        {isOpen ? <FaBars className='tag' onClick={()=>checkOpen()}></FaBars> : <FaWindowClose className='tag'  onClick={()=>checkOpen()}></FaWindowClose>}
        <ul className={isOpen ? 'links ' : 'links active'}>
            <li><Link onClick={()=>setIsOpen(true)}  to='/' className='link'>Home</Link></li>
            <li>Courses</li>
            <li>Teachers</li>
            <li>Blogs</li>
            <li>Feed</li>
            <li><Link onClick={()=>setIsOpen(true)} to='/dashboard' className='link'>Dashboard</Link></li>
            {user ?  <button className='link-btn link' onClick={()=>sigNOut()}>Sign Out</button>: <li><Link onClick={()=>setIsOpen(true)} to='/signin' className='link'>Sign up</Link></li>}
        </ul>
    </div>
  )
}

export default Navbar