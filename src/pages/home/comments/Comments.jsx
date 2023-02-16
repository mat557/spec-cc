import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Comments.css';
import profile from '../../../images/books.jpg';




const Comments = () => {
    const [comments,setComments] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
            setComments(data)
        })
    },[])

    let comment = comments.slice(0,3);
    
  return (
    <div className='holder'>
        <h1>Checkout our users saying!</h1>
        <div className='comment-holder'>
            {
                comment.map(c => 
                    <div className='comment'>
                        <img src={profile} alt="" />
                        <div className='comment-des'>
                            <h5>Name:{c.name}</h5>
                            <h6>:-{c.body}</h6>
                        </div>
                    </div>
                    )
            }
        </div>
    </div>
  )
}

export default Comments;