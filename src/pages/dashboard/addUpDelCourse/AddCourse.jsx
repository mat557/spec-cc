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
              nameDescription: data.subDes,
              classNumber: data.classNumber,
              classDescription: data.numberDes,
              exams: data.exams,
              examsDescription: data.examsDes,
              assignment: data.assignment,
              assignmentDescription: data.assignmentDes,
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
        <div className='add-in'>
            <p style={{color:"white",fontSize:"25px"}}>Add your new course here</p>
            <form onSubmit={handleSubmit(onSubmit)}>

                <select className='course-in' placeholder='subject name' {...register("subject", { required: true })}>
                    <option value="physics1">Physics first paper</option>
                    <option value="physics2">Physics second paper</option>
                    <option value="math1">Math first paper</option>
                    <option value="math2">Math second paper</option>
                    <option value="chem1">Chemistry first paper</option>
                    <option value="chem2">Chemistry second paper</option>
                </select>
                <input className='course-in' placeholder='Explain the name'   type="text" {...register("subDes", { required: true })} />

                <input className='course-in' placeholder='Number of classes'   type="number" {...register("classNumber", { required: true })} />
                <input className='course-in' placeholder='Explain class number'   type="text" {...register("numberDes", { required: true })} />

                <input className='course-in' placeholder='Number of exams'   type="number" {...register("exams", { required: true })} />
                <input className='course-in' placeholder='Explain exams number'   type="text" {...register("examsDes", { required: true })} />

                <input className='course-in' placeholder='Number of assignment'   type="number" {...register("assignment", { required: true })} />
                <input className='course-in' placeholder='Explain assignment number'   type="text" {...register("assignmentDes", { required: true })} />

                <input className='course-in' placeholder='Course Fee'   type="number" {...register("fee", { required: true })} />
                <input className='course-in' placeholder='Course Fee'   type="file" {...register("image", { required: true })} />
                <textarea className='course-in' placeholder='Add description'   {...register("description", { required: true })}/>
                {errors.fee && <span>No empty field allowed</span>}
                
                <input className='add-in-btn' type="submit" />
            </form>
        </div>
  )
}

export default AddCourse;