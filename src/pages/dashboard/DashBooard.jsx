import React, { useState } from 'react';
import { Link, Outlet} from 'react-router-dom';
import './DashBoard.css';
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";

const DashBooard = () => {
  const [isSideOpen,setSideIsOpen] = useState(true);



  

  return (
    <div className='dashbord-holder'>
      
      <button className='direction-but' style={{zIndex:'101'}} onClick={()=>setSideIsOpen(!isSideOpen)}>{isSideOpen?<AiOutlineArrowLeft style={{paddingTop:'4px'}}></AiOutlineArrowLeft>:<AiOutlineArrowRight style={{paddingTop:'4px'}}></AiOutlineArrowRight>}</button>
      
      <h1 style={{color:'white',marginLeft: "20px"}}>DashBoard</h1>
      <h5 style={{color:'white',marginLeft: "20px"}}>Manage And Find Everything Here!</h5>
      
      <div className='div-cont'>

        <ul  className={isSideOpen? 'side-nav on' : 'side-nav'}>
          <li><Link to="/dashboard" className='liink'>Profile</Link></li>
          <li><Link className='liink'>My classes</Link></li>
          <li><Link to="/dashboard/users" className='liink'>All Users</Link></li>
          <li><Link to="/dashboard/manageCourse"  className='liink'>Mange Course</Link></li>
          <li><Link className='liink'>Dashboard</Link></li>
          <li><Link className='liink'>Login</Link></li>
        </ul>

      </div>

      <div>
        <Outlet/>
      </div>


    </div>
  )
}

export default DashBooard;
