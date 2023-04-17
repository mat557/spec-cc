import React, { useEffect } from 'react';
import book from '../../../images/classRoom.jpg';
import books from '../../../images/books.jpg';
import Slider from './Slider';
import { useState } from 'react';
import { SliderData } from '../../shared/SliderData';
import { FaAngleLeft , FaAngleRight } from "react-icons/fa";
// import books from '../../../images/books.jpg';
// import classRoom from '../../../images/classRoom.jpg';
// import mobile from '../../../images/mobile.jpg';
// import cover from '../../../images/homeCover.jpg';
import './Landing.css';


const Landing = () => {
  const [current,setCurrent] = useState(0);
  const length = SliderData.length;
  
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrent(current === length - 1 ? 0 : current + 1);
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // }, [length]);

  // useEffect(()=>{
    
  // },[])

  const nextSlide = () =>{
    setCurrent(current === length-1 ? 0 : current + 1)
  }

  const prevSlide = () =>{
    setCurrent(current === 0 ? length -1 : current - 1)
  }


  return (
    <div className='land-holder'>
      <div className='color-holder'>
          <div className='font-holder'>
            <button onClick={nextSlide} className='font-but-1'><FaAngleLeft  className='font-1'></FaAngleLeft></button>
            <button onClick={prevSlide} className='font-but-2'><FaAngleRight className='font-2'></FaAngleRight></button>
          </div>
      </div>
          <Slider 
              sliderr={SliderData}
              current={current}
          ></Slider>
      

    </div>
  )
}

export default Landing

