import React from 'react';
import { useGetBlogQuery } from '../../feature/blog/blogEndspoint';
import SingleItem from './singleItem/SingleItem';
import './Post.css';
import Footer from '../../footer/Footer';

const Post = () => {


  const {data , refetch , isLoading , isError} = useGetBlogQuery();

  
  return (
    <div className='post'>
      <div className="card-holder">
        {
          data?.map(blog =>
            <SingleItem
              key={blog._id}
              blog={blog}
            ></SingleItem>
            )
        }
      </div>
    </div>
  )
}

export default Post