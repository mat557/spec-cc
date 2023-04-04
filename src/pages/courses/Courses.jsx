import React from 'react';
import { useGetAllCoursesQuery } from '../feature/course/courseEndpoints';
import Loder from '../shared/loder/Loder';
import "./Courses.css";
import SingleCourse from './SingleCourse.jsx';



const Courses = () => {

  const { data , isLoading} = useGetAllCoursesQuery();

  if(isLoading){
    return <Loder></Loder>
  }

 

  return (
    <div className='Courses-holder'>
      <div className='Courses-heading'>
        <div className='Courses-heading-text'>
          <h1>You Dream</h1>
          <h1>We Design...</h1>
          <p>Log in to access our course!</p>
        </div>
      </div>

      <div className='single-course'>
        {
          data?.map((course)=> <SingleCourse
              key={course?._id}
              course={course}
            ></SingleCourse>
          )
        }
      </div>

    </div>
  )
}

export default Courses;