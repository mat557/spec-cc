import React from 'react';
import { SliderData } from '../../shared/SliderData';
import './Landing.css';

const Slider = ({sliderr,current}) => {
    
    if(!Array.isArray(sliderr) || sliderr.length <= 0){
        return null;
    }

    

  return (
    <div className='slider'>
        {
            SliderData.map((slide,index)=>{
                return (
                    <div className={index === current ? 'slider-des' : 'slider-des'} key={index}>
                        {
                            index === current && 
                            <div className='change'>
                                <img src={slide.img} alt="" />
                                <div className='change-des'>
                                    <button className='top-btn'>{slide.but}</button>
                                    <h1>{slide.tit}</h1>
                                    <h5>{slide.des}</h5>
                                    <button className='btm-btn'>Explore Process</button>
                                </div>
                            </div>
                        }
                    </div>
                )
            })
        }
    </div>
  )
}

export default Slider