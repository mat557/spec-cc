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
                comment.map(( c , index )=> 
                <div className="comment-card">
                    <div className="comment-header">
                        <img src={profile} alt="User Avatar"/>
                        <h2 className="user-name">John Doe</h2>
                        <p className="comment-date">May 1, 2023</p>
                    </div>
                    <p className="comment-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus purus a sapien tristique blandit. Morbi euismod ante sit amet magna maximus, sit amet sagittis urna fermentum. Ut vel hendrerit metus. Nullam euismod mi eget faucibus interdum.
                    </p>
              </div>
                    )
            }
        </div>
        <div className="paginationa">
            <a href="#" className="pagination-item active">1</a>
            <a href="#" className="pagination-item">2</a>
            <a href="#" className="pagination-item">3</a>
            <a href="#" className="pagination-item">4</a>
            <a href="#" className="pagination-item">5</a>
        </div>

    </div>
  )
}

export default Comments;