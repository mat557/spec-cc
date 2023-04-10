import React from 'react';
import img1 from '../../../images/coverImg.jpg';
import './SideNav.css';

const SideNav = () => {
  return (
    <div className='sideNav'>
        <div className="sidebarItem">
            <span className='sideNavTitle'>ABOUT BLOGS</span>
            <img className='sideNavImg' src={img1} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Optio, cum! Ipsa adipisci voluptate eum dolores minus! 
                Aperiam harum aut earum alias! Excepturi laboriosam voluptate 
                reprehenderit error animi ratione voluptatibus ipsam!
            </p>
            <ul className='sidebarList'>
                <li className='sideBarlistItem'>Home</li>
                <li className='sideBarlistItem'>Home</li>
                <li className='sideBarlistItem'>Home</li>
                <li className='sideBarlistItem'>Home</li>
                <li className='sideBarlistItem'>Home</li>
            </ul>
        </div>
    </div>
  )
}

export default SideNav