import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {  useEnroleCourseMutation, useGetSingleCourseQuery } from '../feature/course/courseEndpoints';
import Loder from '../shared/loder/Loder';
import { BiBookAlt , BiGrid , BiBookReader , BiCart , BiPen } from "react-icons/bi";
import './Details.css';
import Footer from '../footer/Footer';

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
    
    console.log(data)

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
    <div>
          <div style={{marginBottom:"20px"}} className='time-line'>

            <div className="containerr left-container">
                <BiBookAlt className='totti'></BiBookAlt>
                <div className="text-box">
                    <h2>Subject Name: {data?.subject}</h2>
                    <small>Choose subject wisely</small>
                    <p>{data?.nameDescription}</p>
                    <span className='left-container-arrow'></span>
                </div>
            </div>

            <div className="containerr right-container">
                <BiGrid className='totti'></BiGrid>
                <div className="text-box">
                    <h2>Number of classes: {data?.classNumber}</h2>
                    <small>Be attentive</small>
                    <p>{data?.classDescription}</p>
                    <span className='right-container-arrow'></span>
                </div>
            </div>


            <div className="containerr left-container">
                <BiPen className='totti'></BiPen>
                <div className="text-box">
                    <h2>Number of exams: {data?.exams}</h2>
                    <small>Practice -> perfect</small>
                    <p>{data?.examsDescription}</p>
                    <span className='left-container-arrow'></span>
                </div>
            </div>  


            <div className="containerr right-container">
                <BiBookReader className='totti'></BiBookReader>
                <div className="text-box">
                    <h2>Number of assignments: {data?.assignment}</h2>
                    <small>Improve your thinking</small>
                    <p>{data?.assignmentDescription}</p>
                    <span className='right-container-arrow'></span>
                </div>
            </div> 


            <div className="containerr left-container">
                <BiCart className='totti'></BiCart>
                <div className="text-box">
                    <h2>Course Fee : {data?.fee} Taka</h2>
                    <small>Spend money wisely</small>
                    <small>{data?.description}</small>
                    <button className='div-1-btn'  onClick={()=>handleEnroleCourse(email,id)}>Enrole Now</button>
                    {bro && <p>Course is already enroled</p>}
                    <span className='left-container-arrow'></span>
                </div>
            </div> 

          </div>
          <Footer/>
    </div>
  )
}

export default Details