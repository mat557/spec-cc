import React from 'react';
import './ApplyAsTeacher.css';
import { useForm } from "react-hook-form";

const ApplyAsTeacher = () => {


    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className='appli-holder'>
            <h1>Apply as a teacher!</h1>
            
            <div className='conti'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className='input-tag'>
                            <input type='text' id='name' {...register("name")} required />
                            <label htmlFor="name">Your Name</label>
                        </div>

                        <div className='input-tag'>
                            <input type='number'  id='number' {...register("number")}  required/>
                            <label htmlFor="number">Your Number</label>
                        </div>
                    </div>
                    

                    <div className='input-tag'>
                        <input type='text'  id='college' {...register("college")}  required/>
                        <label htmlFor="college">College Name</label>
                    </div>


                    <div className='input-tag'>
                        <input type='text'  id='email' {...register("email")} required />
                        <label htmlFor="email">Your Email</label>
                    </div>

                    <div className="row1">
                        <select className='check' {...register("gender")} required>
                            <option value="female">female</option>
                            <option value="male">male</option>
                            <option value="other">other</option>
                        </select>

                        <select className='check'  {...register("subject")} required>
                            <option value="female">Physics</option>
                            <option value="male">Chemistry</option>
                            <option value="other">Math</option>
                            <option value="other">Bio</option>
                        </select>

                        
                        <input className='check'  type='file'  id='file' {...register("file")}  required/>

                    </div>

                    

                    <div className='input-tag'>
                        <textarea id='text' {...register("text")} required ></textarea>
                        <label htmlFor="text">Message</label>
                    </div>

                    <input type="submit" />
                </form>
            </div>

        </div>
    )
    }

export default ApplyAsTeacher;