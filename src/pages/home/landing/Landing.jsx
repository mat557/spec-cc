import React from 'react';
import './Landing.css';
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


const Landing = () => {
  const [current,setCurrent] = useState(0);
  const length = SliderData.length;
  
  const nextSlide = () =>{
    setCurrent(current === length-1 ? 0 : current + 1)
  }

  const prevSlide = () =>{
    setCurrent(current === 0 ? length -1 : current - 1)
  }


  return (
    <div className='land-holder'>
      {/* <div className="circle-1"></div>
      <div className="circle-2"></div> */}
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



// <div className='land-img'>
        
//         <div className='land-img-1'>
//           <img src={book} alt="" />
//           <div className="overley-1"></div>
//           <div className='title-1'>
//             <p>Be Active</p>
//           </div>
//           <div className='title-2'>
//             <h2>The Secret of Getting Ahead Is</h2>
//             <h2>Getting Started</h2>
//           </div>
//         </div>

//         {/* <img style={{marginLeft:'40px'}} src={books} alt="" /> */}
//         <div  className='land-img-2'>
//           <img src={books} alt="" />
//           <div className="overley-2"></div>
//           <div className='title-3'>
//             <p>Be Fast</p>
//           </div>
//           <div className='title-4'>
//             <h2>Imagination Works Faster Than</h2>
//             <h2>Your Mind</h2>
//           </div>
//         </div>

//     </div>