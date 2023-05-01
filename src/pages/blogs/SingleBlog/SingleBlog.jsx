import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleBlogQuery } from '../../feature/blog/blogEndspoint';
import Loder from '../../shared/loder/Loder';
import SideNav from '../sidenav/SideNav';
import { CiFaceSmile , CiFaceFrown  } from "react-icons/ci";
import './SingleBlog.css';
import Footer from '../../footer/Footer';

const SingleBlog = () => {
    const {blogId} = useParams();
    const { data , isLoading } = useGetSingleBlogQuery(blogId);

    if(isLoading || !data){
        return <Loder></Loder>
    }
    

  return (
    <div>
        <div className='single-details-holder'>
            <div class="blog-container">
                <img src={data.image} alt="" />
                <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                  <p>Posted by -<span style={{color:"black",marginTop:"5px"}}>{data?.writer ? data.writer : "Not found"}</span></p>
                  <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}} >
                    <span style={{marginLeft:"10px",fontSize:"20px"}}><CiFaceSmile style={{color:"red",marginTop:"5px"}}></CiFaceSmile>{data?.like?.length}</span>
                    <span style={{marginLeft:"10px",fontSize:"20px"}}><CiFaceFrown style={{marginTop:"5px"}}></CiFaceFrown>{data?.dis_like?.length}</span>
                  </div>
                </div>
                <h1 class="blog-title">{data.title}</h1>
                <p class="blog-content">{data.description}</p>
                <span class="blog-date"></span>
            </div>
            <SideNav></SideNav>
        </div>
        <Footer/>
    </div>
  )
}

export default SingleBlog