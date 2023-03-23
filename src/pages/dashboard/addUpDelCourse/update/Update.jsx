import React  from 'react';
import './Update.css';
import { FiMinimize2  } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useGetSingleCourseQuery, useUpdateCourseMutation } from '../../../feature/course/courseEndpoints';

const Update = ( { isOpen , handleModal , id }) => {
    // console.log(id)
    // const [updateCourse , { isLoading }] = useUpdateCourseMutation();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // updateCourse(id._id , data);
        console.log(id._id)
        console.log(data)
    };


    
  return (
    <div>
    
        <div className={isOpen?'modal-holder mod-on':'modal-holder'}>
            <div className={isOpen?'modal-content mod-con-on':'modal-content'}>
                <div onClick={()=>handleModal()} className="modal-btn"><FiMinimize2></FiMinimize2></div>
                <div>
                    <form style={{margin:"10px auto"}} onSubmit={handleSubmit(onSubmit)}>

                        <select className='course-in' placeholder='subject name' {...register("subject")}>
                            <option value="physics1">Physics-1</option>
                            <option value="physics2">Physics-2</option>
                            <option value="math1">Math-1</option>
                            <option value="math2">Math-2</option>
                            <option value="chem1">Chemistry-1</option>
                            <option value="chem2">Chemistry-2</option>
                        </select>
                        
                        <input className='course-in' placeholder='Number of classes'   type="number" {...register("classNumber")} />
                        <input className='course-in' placeholder='Number of exams'   type="number" {...register("exams")} />
                        <input className='course-in' placeholder='Number of assignment'   type="number" {...register("assignment")} />
                        <input className='course-in' placeholder='Course Fee'   type="number" {...register("fee")} />
                        <input className='course-in' placeholder='Course Fee'   type="file" {...register("image")} />
                        <textarea className='course-in' placeholder='Add description'   {...register("description")}/>
                        {errors.fee && <span>No empty field allowed</span>}
                        
                        <input className='add-in-btn' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Update