import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';
import img1 from '../../../images/pic1.jpg';
import { CiSettings , CiTextAlignJustify } from "react-icons/ci";


const Profile = () => {
  const { isLoading, user  ,isError,error } = useSelector(state => state.auth);
  
  return (
    <div className="prof-container">
      <div className="prof-box">
          <CiSettings className="menu-icon1"></CiSettings>
          <CiTextAlignJustify className="menu-icon2"></CiTextAlignJustify>
          <img src={img1} alt="" />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.number}</p>
          {/* <p>Student at {user.email}</p> */}
          <button type="button">Visite Class</button>
          <div className="profile-bottom">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                <button type="buttn">Visite Class</button>
          </div>
      </div>
    </div>
  )
}


export default Profile;