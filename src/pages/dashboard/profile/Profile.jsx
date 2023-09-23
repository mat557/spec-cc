import React from 'react';
import { useSelector } from 'react-redux';
import './Profile.css';
import img1 from '../../../images/pic1.jpg';
import { CiSettings , CiTextAlignJustify } from "react-icons/ci";


const Profile = () => {
  const { isLoading, user  ,isError,error } = useSelector(state => state.auth);
  // console.log(user)
  
  return (
    <div className="prof-container">
      <div className="prof-box">
          <CiSettings className="menu-icon1"></CiSettings>
          <CiTextAlignJustify className="menu-icon2"></CiTextAlignJustify>
          <img src={img1} alt="" />
          <h3>{user?.name}</h3>
          <p>{user?.email}</p>
          <p>{user?.number}</p>
          <p>{user?.role?.join(', ')}</p>
          <button type="button">Visite Class</button>
          <div className="profile-bottom">
                {user?.role != 'admin' && <p>You have enrolled {user?.id.length} {user?.id.length > 1 ? `courses` : `course`}</p>}
          </div>
      </div>
    </div>
  )
}


export default Profile;