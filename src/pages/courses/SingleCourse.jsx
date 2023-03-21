import React from 'react';
import "./Courses.css";
import { CiSettings , CiTextAlignJustify } from "react-icons/ci";

const SingleCourse = ({ course }) => {

  
  return (
    <div style={{marginTop:"40px"}} className="prof-container1">
      <div className="prof-box1">
          <img src={course?.imge} alt="" />
          <h3>Course Name:{course?.subject}</h3>
          <p>Number of Classes :{course?.classNumber}</p>
          <p>Number of Exams :{course?.exams}</p>
          <p>Courses Fee:{course?.fee}</p>
          <div className="profile-bottom1">
                <p>{course?.description}</p>
                <button type="title-buttn">Book Now</button>
          </div>
      </div>
    </div>
  )
};

export default SingleCourse;