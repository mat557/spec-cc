import React, { useState } from 'react';
import './Feed.css';
import { useGetFeedReplyQuery,  usePostAnswerMutation } from '../feature/blog/blogEndspoint';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import Loder from '../shared/loder/Loder';

const FeedModal = ({ isOpen,setIsOpen , idForModal  }) => {
    const { user , isLoading } = useSelector(state => state.auth)
    const { data : reply , refetch,  isLoading1  } = useGetFeedReplyQuery({idForModal},{pollingInterval : 1000});
    const [ postAnswer ] = usePostAnswerMutation();
    const [answer,setAnswer] = useState('')

    if(isLoading  || isLoading1){
        return <Loder></Loder>
    }
    
    const handleComment = () =>{
        if(user.email){
            const answerForPost = {
                replyFor    : idForModal,
                email       : user.email,
                name        : user.name,
                role        : user.role[0],
                reply       : answer
            }
            postAnswer({idForModal,answerForPost})
            .then(res =>{
                if(res.data?.acknowledged){
                    refetch();
                    toast.success("Answer added to que", {
                        style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: 'green',
                        },
                        iconTheme: {
                        primary: 'green',
                        secondary: '#FFFAEE',
                        },
                    })
                }
            })
            .catch(err => {
                console.error(err);
                toast.error("Failed to add reply to que", {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        color: 'red',
                    },
                    iconTheme: {
                        primary: 'red',
                        secondary: '#FFFAEE',
                    },
                });
            });
        }else{
            toast.error("Must logged in to reply!", {
                style: {
                    border: '1px solid #713200',
                    padding: '16px',
                    color: 'red',
                },
                iconTheme: {
                    primary: 'red',
                    secondary: '#FFFAEE',
                },
            })
        }   
    }

  return (
    <div className={isOpen == true ? 'feed-modal' : 'close'}>
        <div className="feed-modal-content">
            <span  onClick={() => setIsOpen(!isOpen)} className="close-btn">&times;</span>
            {
                reply && reply[0]?.comment.map((comment,index) => <div style={{display:"flex",alignItems:"center"}} key={index}>
                    <h2>{comment.reply}</h2><span style={{paddingTop:"8px",paddingLeft:"10px",fontSize:"10px",fontWeight:"100"}}>{comment.name}</span>
                </div>)
            }
            <input onChange={(event) => setAnswer(event.target.value)} className='feed-input' placeholder='type your answer' />
            <button onClick={handleComment} className="feed-modal-btn">Comment</button>
            </div>
    </div>
  )
}

export default FeedModal;
{/* <div className='pagination'>
    {
        [...Array(com).keys()].map(number => <button onClick={()=>{setPagePerComment(number)}}  className='pagination-button' key={number}>{number+1}</button>)
    }
</div> */}