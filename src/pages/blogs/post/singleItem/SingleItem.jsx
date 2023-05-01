import React from 'react';
import { CiFaceSmile , CiFaceFrown  } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import './SingleItem.css';
import Footer from '../../../footer/Footer';

const SingleItem = (blog) => {
  const navigate = useNavigate();

  const handleGetDetailsBlog = (id) =>{
    navigate(`/blog/details/${id}`)
  }

  // console.log(blog.blog.like?.length)

  return (
    <div className="card">
        <img src={blog.blog.image} alt="Blog Image"/>
        <div className="card-content">
            <h2 className="card-title">{blog?.blog.title.length > 20? blog?.blog.title.slice(0,35)+ "...": blog?.blog.title}</h2>
            <p className="card-description">{blog?.blog.description.length > 50 ? blog?.blog.description.slice(0,80) + "..." : blog?.blog.description }</p>
            <button className="card-link" onClick={() => handleGetDetailsBlog(blog?.blog._id)}>Read More</button>
            
        </div>
        <div className='opinion'>
            <div className='opinion-imogi'>
              <span style={{marginLeft:"10px"}}><CiFaceSmile style={{color:"red"}}></CiFaceSmile>{blog?.blog.like?.length}</span>
              <span style={{marginLeft:"10px"}}><CiFaceFrown></CiFaceFrown>{blog?.blog.dis_like?.length}</span>
            </div>  
              <p>Posted by <span style={{color:"white"}}>{blog?.blog.writer ? blog?.blog.writer : "Not found"}</span></p>
        </div>
    </div>


  )
}

export default SingleItem