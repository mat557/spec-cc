import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { CiMail } from "react-icons/ci";
import './Footer.css'


const Footer = () => {
    const { register, handleSubmit , errors } = useForm();
    const onSubmit = data => console.log(data);
  return (
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
                <h3>Comment</h3>
                {/* <p>share your experience</p> */}
                <form className='col-form' onSubmit={handleSubmit(onSubmit)}>
                    <input className='in-put' type='text' placeholder='share your experience' {...register("comment", { required: true })} />
                    {errors && <span>Comment is required</span>}
                    <select style={{marginTop:"10px"}} className='in-put'  {...register("ratings")}>
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
}

export default Footer