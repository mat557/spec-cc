import React from 'react';
import { useGetAllCoursesQuery } from '../feature/course/courseEndpoints';
import Loder from '../shared/loder/Loder';
import SingleCourse from './SingleCourse.jsx';

import img from '../../images/pic1.jpg';
import "./Courses.css";



const Courses = () => {

  const { data , isLoading} = useGetAllCoursesQuery();

  if(isLoading){
    return <Loder></Loder>
  }

 

  return (
    <div className='Courses-holder'>
      <div className="headerTitle">
          <span className='headerTitleSm'>You Think,We design</span>
          <span className='headerTitleLg'>Courses</span>
      </div>
      <img className='headerImage' src={img} alt="" />

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