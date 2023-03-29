import React  from 'react';
import './Update.css';
import { FiMinimize2  } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useUpdateCourseMutation } from '../../../feature/course/courseEndpoints';

const Update = ( { isOpen , handleModal , id , setIsOpen }) => {
    const { register, handleSubmit, watch, formState: { errors } , reset } = useForm();
    const [updateCourse , {isLoading}] = useUpdateCourseMutation();
    
    // const onSubmit = data => {
    //     const tag = id._id;
    //     const info = data;
    //     updateCourse({tag,info})
    //     reset();
    //     setIsOpen(!isOpen)
    // };

    const onSubmit = data => {
      
        const image1 = data.image[0];
        const formData = new FormData();
        formData.append('image', image1);
  
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=4957c3c668ded462db1fb1002c4535e6`;
  
        fetch(url,{
          method : 'POST',
          body : formData,
        })
        .then(res => res.json())
        .then(imgData => {
          
          if(imgData.success){
              const info = {
                subject: data.subject,
                classNumber: data.classNumber,
                exams: data.exams,
                assignment: data.assignment,
                fee: data.fee,
                imge:imgData.data.url,
                description: data.description,
            }
            const tag = id._id;
            updateCourse({tag,info});
          }
        })
        setIsOpen(!isOpen);
        reset();
      };


    
  return (

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
                        <input className='course-in' placeholder='Image'   type="file" {...register("image")} />
                        <textarea className='course-in' placeholder='Add description'   {...register("description")}/>
                        {errors.fee && <span>No empty field allowed</span>}
                        
                        <input className='add-in-btn' type="submit" />
                    </form>
                </div>
            </div>
        </div>

  )
}

export default Update