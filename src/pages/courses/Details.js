import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleCourseQuery } from '../feature/course/courseEndpoints';
import Loder from '../shared/loder/Loder';
import './Details.css';

const Details = () => {
    const  {courseId}  = useParams();
    const { data , isLoading} = useGetSingleCourseQuery(courseId);

    if(isLoading){
        return <Loder></Loder>
    }

    console.log(data)
  return (
    <div className='details-holder'>
        <div className='small-details'>
            <h2>Subject Name: {data?.subject}</h2>
            <div className='v1'><span></span></div>
            <h4>{data?.nameDescription}</h4>
        </div>

        <div className='small-details'>
            <h2>Number of classes: {data?.classNumber}</h2>
            <div className='v1'><span></span></div>
            <h4>{data?.classDescription}</h4>
        </div>

        <div className='small-details'>
            <h2>Number of exams: {data?.exams}</h2>
            <div className='v1'><span></span></div>
            <h4>{data?.examsDescription}</h4>
        </div>

        <div className='small-details'>
            <h2>Number of assignments: {data?.assignment}</h2>
            <div className='v1'><span></span></div>
            <h4>{data?.assignmentDescription}</h4>
        </div>

        <div className='small-details-bottom'>
            <img src={data?.imge} />
            <div className='div-1'>
                <p style={{color:"white",textAlign:'left',marginLeft:'15px',marginTop:'-135px'}}>{data?.description}</p>
                <h1 style={{color:"white"}}>Course Fee : {data?.fee} Taka</h1>
                <button>Enrole Now</button>
            </div>
        </div>

    </div>
  )
}

export default Details