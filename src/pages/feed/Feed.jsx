import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import img from '../../images/pic1.jpg';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useGetFeedItemCOuntQuery, useGetFeedItemQuery, useGetFeedReplyQuery, useGetReplyItemCuntQuery, usePostAnswerMutation, usePostQuestionMutation } from '../feature/blog/blogEndspoint';
import Loder from '../shared/loder/Loder';
import FeedModal from './FeedModal';
import './Feed.css';

const Feed = () => {
    const [idForModal,setIdForModal] = useState('');
    const [size] = useState(5);
    const [page,setPage] = useState(0);
    const seven = 7;
    const { data } = useGetFeedItemCOuntQuery();
    const {user , isLoading} = useSelector(state => state.auth)
    const { register, handleSubmit, watch, formState: { errors } , reset } = useForm();
    const [ postQuestion , {isLoading1} ] = usePostQuestionMutation();
    const pages = Math.ceil(data / size);
    const { data : feed , refetch } = useGetFeedItemQuery({page,size})
    const [isOpen,setIsOpen] = useState(false);
    

    if(isLoading || isLoading1 || isNaN(pages)){
        return <Loder></Loder>
    }



    const onSubmit = data => {
        if(user.email){
            const image1 = data.imageOfquestion[0];
            const formData = new FormData();
            formData.append('image', image1);
    
            const url = `https://api.imgbb.com/1/upload?expiration=600&key=4957c3c668ded462db1fb1002c4535e6`;
    
            fetch(url,{
            method : 'POST',
            body : formData,
            })
            .then(res => res.json())
            .then(imgData => {
            const questionForPost = {
                email       : user.email,
                name        : user.name,
                role        : user.role[0],
                image       : imgData.data.display_url,
                description : data.details,
                like        : [],
                comment     : []
            }

            postQuestion(questionForPost)
            .then(res =>{
                    if(res.data?.acknowledged){
                        toast.success("Question added to que", {
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
                    toast.error("Failed to add question to que", {
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
            
            })
        }else{
            toast.error("Must login to ask question", {
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
        reset();
    };

    

    

  return (
    <div className='feed-holder' >
        <div className="headerTitle">
          <span className='headerTitleLg'>Feed</span>
        </div>
        <img className='headerImage' src={img} alt="" />

        <div className='question-card'>
            <h3>Want to ask a question?</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea  className='custom-file-input' placeholder='Ask your question' {...register("details")} />
                <input  className='custom-file-input' type='file' {...register("imageOfquestion", { required: true })} />
                {errors.imageOfquestion && <span>This field is required</span>}
                
                <input type="submit" />
            </form>
        </div>

        <FeedModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setPage={setPage}
            idForModal={idForModal}
            seven={seven}
        ></FeedModal>

     

        <div className='feed-card-holder'>
            {
                feed?.map((question,index) => 
                    <div key={index} className="feed-card">
                        
                        <div className="card-header">
                            <img src="https://via.placeholder.com/50x50" alt="Profile Picture" className="profile-picture"/>
                            <div className="user-details">
                            <h3>{question.name}</h3>
                            <p>{question.email}</p>
                            </div>
                            <button className="card-menu">&#x22EE</button>
                        </div>

                        <div className="card-body">
                            <p>{question.description}</p>
                            <img src={question.image} alt="Post Image" className="post-image"/>
                        </div>

                        <div className="card-footer">
                            <button className="card-action like"><i className="fa fa-thumbs-up"></i> Like</button>
                            <button onClick={() => {setIsOpen(!isOpen);setIdForModal(question._id)}} className="card-action comment"><i className="fa fa-comment"></i> Comment</button>
                    </div>
            </div>
            )}

            <div className='pagination'>
                {
                    [...Array(pages).keys()].map(number => <button onClick={()=>{setPage(number)}}  className={number == size ?'selected': 'pagination-button'} key={number}>{number+1}</button>)
                }
            </div>
            
        </div>
    </div>
  )
}

export default Feed