import React from 'react'
import ApplyAsTeacher from './applyAsTeacher/ApplyAsTeacher';
import Comments from './comments/Comments';
import Landing from './landing/Landing';
import TimeLine from './timelinr/TimeLine';
import Stat from './stats/Stat';
import './Home.css'
import CourseOverView from './course_overview/CourseOverView';
import Footer from '../footer/Footer';

const Home = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className='home-cont'>
        <Landing/>
        <Stat/>
        <CourseOverView/>
        {/* <TimeLine/> */}
        <Comments/>
        <ApplyAsTeacher/>
        <Footer/>
        <button className='butun' onClick={handleClick}>Top</button>
    </div>
  )
}

export default Home;