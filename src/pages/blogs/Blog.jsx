import React from 'react';
import img from '../../images/pic1.jpg';
import Post from './post/Post';
import SideNav from './sidenav/SideNav';
import './Blog.css';
import Footer from '../footer/Footer';


const Blog = () => {
  return (
    <div className='header'>
        <div className="headerTitle">
          <span className='headerTitleSm'>Read to design your future</span>
          <span className='headerTitleLg'>Blogs</span>
        </div>
        <img className='headerImage' src={img} alt="" />
        
        <div className='home'>
          <Post></Post>
          <SideNav></SideNav>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog;