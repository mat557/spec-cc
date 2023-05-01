import React from 'react';
import { FiArrowRightCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useGetAllCoursesQuery } from '../../feature/course/courseEndpoints';
import './CourseOverView.css';

const CourseOverView = () => {
    const navigate = useNavigate();
    const { data : courses ,  isLoading} = useGetAllCoursesQuery()

    const handleCourseNavigate = () =>{
        navigate('/courses')
    }
    const getDetails = (id) =>{
        navigate(`/course/details/${id}`, { replace: true })
    }


    let threeCourses;

    if(window.screen.width < 421){
        threeCourses = courses?.slice(0,2)
    }else{
        threeCourses = courses?.slice(0,3)
    }
    

  return (
    <div className='course-view-holder'>
        <div className='course-view-text'>
            <h1>Checkout Our Courses</h1>
            <p>Get enrolled through an easy payment system</p>
            <div className='line'></div>
            <small>Start your journey ASAP!</small>
            <div className='course-btn-holder'>
                <p>Checkout all courses ?</p><button onClick={handleCourseNavigate}>Go<FiArrowRightCircle className='pic'></FiArrowRightCircle></button>
            </div>
        </div>
        
        <div className='course-view-cont'>
        {
            threeCourses?.map((course,index)=>
                <div key={index} className="course-view-container1">
                    <div className="course-view-box1">
                        <img src={course?.imge} alt="" />
                        <div className="course-view-bottom1">
                            <h3>Course Name:{course?.subject}</h3>
                            <p>Number of Classes :{course?.classNumber}</p>
                            <p>Number of Exams :{course?.exams}</p>
                            <p>Courses Fee:{course?.fee}</p>
                            <button className="card-btn" onClick={()=>getDetails(course._id)}>Details</button>
                        </div>
                    </div>
                </div>)
        }
        </div>
    
    </div>
  )
}

export default CourseOverView