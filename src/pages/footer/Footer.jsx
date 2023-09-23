import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import './Footer.css'
import { useSelector } from 'react-redux';
import { usePostSingleCommentMutation } from '../feature/comment/commentEndpoint';
import toast from 'react-hot-toast';
import Loder from '../shared/loder/Loder';


const Footer = () => {
    const { register, handleSubmit , errors } = useForm();
    const {user} = useSelector(state => state?.auth)
    
    const [postSingleComment , {
        isError,
        isLoading,
        isSuccess,
        error
    }] = usePostSingleCommentMutation()
    // console.log(user)
    
    
    if(isLoading){
        return <Loder />
    }
    
    const onSubmit = data => {
        const opinion = {
            name   : user?.name,
            email  : user?.email,
            role   : user?.role[0] || '',
            cmnt   : data.comment,
            ratings : data.ratings
        }
        // console.log(opinion)


        postSingleComment(opinion)
            .then((res) => {
                console.log(res)
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json()
            })
            .then((data) => {
                console.log(data)
                if(data.acknowledged){
                    toast.success("Comment added successfully!")
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            
    };
     
    
    let content = (
        <footer>
            <div className="roww">

                <div className="col">
                    <h3>Spectrum cc</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quisquam facere iste odio ut, quaerat recusandae rem earum molestias harum quae in possimus. Quae dolor.</p>
                </div>
                
                <div className="col">
                    <h3>Office</h3>
                    <p>Gourgobindo-tila</p>
                    <p>Couhatta</p>
                    <p>Sylhet</p>
                    <p className='emailID'>matasnim11@gmail.com</p>
                    <h4>01234454656</h4>
                </div>
                
                <div className="col">
                    <h3>Links</h3>
                    <ul>
                        <li><Link className='react-linku' to="/courses">Courses</Link></li>
                        <li><Link className='react-linku' to="/blogs">Blogs</Link></li>
                        <li><Link className='react-linku' to="/feed">Feed</Link></li>
                        <li><Link className='react-linku' to="/dashboard">DashBoard</Link></li>
                        <li><Link className='react-linku' to="">About Us</Link></li>
                    </ul>
                </div>
                
                <div className="col">
                    {/* <h3>Comment</h3> */}
                    <h3>share your experience</h3>
                    <form className='col-form' onSubmit={handleSubmit(onSubmit)}>
                        <input className='in-put' type='text' placeholder='share your experience' {...register("comment", { required: true })} />
                        {errors && <span>Comment is required</span>}
                        <select style={{marginTop:"10px"}} className='in-put'  {...register("ratings", { required: true })}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button type='submit'>post<CiMail></CiMail></button>
                    </form>
                </div>

            </div>
        </footer>
  )

  return content
}

export default Footer