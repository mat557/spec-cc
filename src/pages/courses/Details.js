import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {  useEnroleCourseMutation, useGetSingleCourseQuery } from '../feature/course/courseEndpoints';
import Loder from '../shared/loder/Loder';
import './Details.css';

const Details = () => {
    const  {courseId}  = useParams();
    const { user , isLoading} = useSelector(state => state.auth)
    const { data , isLoading1} = useGetSingleCourseQuery(courseId);
    const [ enroleCourse ] = useEnroleCourseMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if(isLoading1 || isLoading || !courseId || !data){
        return <Loder></Loder>
    }

    var bro = 0;

    const email = user?.email;
    const id = courseId;

    if(user?.id.length){
        bro = user?.id.find(i => i === courseId);
    }
    
    

    const handleEnroleCourse =(email,id) => {
        if(!user?.email){
            toast.error("Log in to access our course!", {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200',
                },
                iconTheme: {
                //   primary: '#713200',
                  primary: 'red',
                  secondary: '#FFFAEE',
                },
              })
            navigate('/signin')
        }else if(bro){
            toast.error('You have already enrolled this course!.Try a new course');
        }else if(user.role[0] == 'admin'){
            toast.error("Admin can't enrol course.", {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200',
                },
                iconTheme: {
                //   primary: '#713200',
                  primary: 'red',
                  secondary: '#FFFAEE',
                },
              })
        }else{
            enroleCourse({ email: email, id: {id} });
            toast.success("You successfully enroled the course.Check your dashbpard", {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: 'green',
                },
                iconTheme: {
                //   primary: '#713200',
                  primary: 'green',
                  secondary: '#FFFAEE',
                },
              })
        }
    }
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
                <button  onClick={()=>handleEnroleCourse(email,id)}>Enrole Now</button>
                {bro && <h5 style={{color:'white'}}>Course is already enroled</h5>}
            </div>
        </div>

    </div>
  )
}

export default Details