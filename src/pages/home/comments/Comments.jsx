import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Comments.css';
import { useGetCommentQuery, useGetTotalDocumentQuery } from '../../feature/comment/commentEndpoint';
import Loder from '../../shared/loder/Loder';


const Comments = () => {
    const [page,setPage] = useState(0);
    const { data : totalcomnt , isLoading , err} = useGetTotalDocumentQuery() 
    
    const {data : comment , 
                isSuccess,
                isLoading : commentLoading,
                error
        } = useGetCommentQuery(page)
    
        
        
    if(commentLoading){
        return <Loder />
    }
    // console.log(totalcomnt,comment)

    const onNextPageClick = () =>{
        setPage(page+1)
    }

    const onPrevPageClick = () =>{
        setPage(page-1)
    }

  let content = (
    <div className='holder'>
        <h1>Checkout our users saying!</h1>
        <div className='comment-holder'>
            {
                comment?.map(( c , index )=> 
                    <div key={c?._id} className="comment-card">
                        <div className="comment-header">
                            {/* <img src={c?.img} alt="User Avatar"/> */}
                            <h2 className="user-name">{c?.email}//</h2>
                            <h4 className="user-name">{c?.role}</h4>
                        </div>
                            <h2 className="user-name">{c?.name}</h2>
                            <p className="comment-text">
                                {c?.cmnt}
                            </p>
                            <p className="comment-text">
                                {c?.rattings}
                            </p>
                    </div>
                )
            }
        </div>
        <div className="paginationa">
            <button  className="pagination-item active" onClick={onPrevPageClick}>-</button>
            <button  className="pagination-item active" onClick={onNextPageClick}>+</button>
        </div>

    </div>
  )

  return content
}

export default Comments;