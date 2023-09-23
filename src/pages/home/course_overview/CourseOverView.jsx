import { FiArrowRightCircle } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useGetAllCoursesQuery } from '../../feature/course/courseEndpoints';
import './CourseOverView.css';
import Loder from "../../shared/loder/Loder";


const CourseOverView = () => {
    const navigate = useNavigate();
    const { data : courses ,  isLoading} = useGetAllCoursesQuery()

    if(isLoading){
        return <Loder></Loder>
    }

    const handleCourseNavigate = () =>{
        navigate('/courses')
    }
    const getDetails = (id) =>{
        navigate(`/course/details/${id}`, { replace: true })
    }


    let threeCourses;
    threeCourses = courses?.slice(0,3)
    

  let content = (
    <div className='course-view-holder'>
        <h1 style={{color:"white",marginLeft:"10px"}}>Checkout Our Courses :</h1>
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
        <p onClick={handleCourseNavigate} className="nav-course-btn">Checkout all courses ?<button onClick={handleCourseNavigate}>Go<FiArrowRightCircle className='pic'></FiArrowRightCircle></button></p>
    
    </div>
  )

  return content
}

export default CourseOverView