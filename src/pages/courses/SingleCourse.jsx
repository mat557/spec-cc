import React from 'react';
import './SingleCourse.css';
import { CiSettings , CiTextAlignJustify } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

const SingleCourse = ({ course }) => {
  const navigate = useNavigate();

  const getDetails = (id) =>{
    navigate(`/course/details/${id}`, { replace: true })
  }
  
  return (
    <div  className="prof-container1">
      <div className="prof-box1">
          <img src={course?.imge} alt="" />
          <div className="profile-bottom1">
                <h3>Course Name:{course?.subject}</h3>
                <p>Number of Classes :{course?.classNumber}</p>
                <p>Number of Exams :{course?.exams}</p>
                <p>Courses Fee:{course?.fee}</p>
                <button className="details" onClick={()=>getDetails(course._id)}>Details</button>
          </div>
      </div>
    </div>
  )
};

export default SingleCourse;