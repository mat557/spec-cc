import React from 'react';
import { useForm } from 'react-hook-form';
import { usePostCourseMutation } from '../../feature/course/courseEndpoints';
import './Course.css';



const AddCourse = () => {
    const { register, handleSubmit, watch, formState: { errors } , reset } = useForm();
    const [ postCourse , { isError , isLoading }] = usePostCourseMutation();
    


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
            const dataToHost = {
              subject: data.subject,
              classNumber: data.classNumber,
              exams: data.exams,
              assignment: data.assignment,
              fee: data.fee,
              imge:imgData.data.url,
              description: data.description,
          }
          postCourse(dataToHost);
        }
      })
      reset();
    };

    

  return (
    <div>
        <div className='add-in'>
      <p style={{color:"white",fontSize:"25px"}}>Add your new course here</p>
            <form onSubmit={handleSubmit(onSubmit)}>

                <select className='course-in' placeholder='subject name' {...register("subject", { required: true })}>
                    <option value="physics1">Physics-1</option>
                    <option value="physics2">Physics-2</option>
                    <option value="math1">Math-1</option>
                    <option value="math2">Math-2</option>
                    <option value="chem1">Chemistry-1</option>
                    <option value="chem2">Chemistry-2</option>
                </select>
                
                <input className='course-in' placeholder='Number of classes'   type="number" {...register("classNumber", { required: true })} />
                <input className='course-in' placeholder='Number of exams'   type="number" {...register("exams", { required: true })} />
                <input className='course-in' placeholder='Number of assignment'   type="number" {...register("assignment", { required: true })} />
                <input className='course-in' placeholder='Course Fee'   type="number" {...register("fee", { required: true })} />
                <input className='course-in' placeholder='Course Fee'   type="file" {...register("image", { required: true })} />
                <textarea className='course-in' placeholder='Add description'   {...register("description", { required: true })}/>
                {errors.fee && <span>No empty field allowed</span>}
                
                <input className='add-in-btn' type="submit" />
            </form>
        </div>
    </div>
  )
}

export default AddCourse;