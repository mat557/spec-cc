import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useGetBlogQuery, usePostBlogMutation } from '../../../feature/blog/blogEndspoint';
import Loder from '../../../shared/loder/Loder';
import './AddBlog.css';


const AddBlog = () => {
    const { register, handleSubmit, watch, formState: { errors } , reset } = useForm();
    const [postBlog , isLoading] = usePostBlogMutation();
    const { user } = useSelector(state => state.auth);
    
    // console.log(user.email)

    // if(isLoading || isLoadings){
    //   return <Loder></Loder>
    // }


    
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
          const dataForPost = {
            title : data.subDes,
            catagory : data.catagory,
            image : imgData.data.display_url,
            description : data.description,
            writer : user.email,
            like : '',
            dis_like : ''
          }
          postBlog(dataForPost);
          
          toast.success("Blog added to data base")
        })
        reset();
      };


  return (
    <div className='postBlogHolder'>
        <h1>Add Blog</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='course-in' placeholder='Title'   type="text" {...register("subDes", { required: true })} />

                <input className='course-in' placeholder='Catagory'   type="text" {...register("catagory", { required: true })} />

                <input className='course-in' placeholder='Course Fee'   type="file" {...register("image", { required: true })} />


                <textarea className='course-in' placeholder='Add description'   {...register("description", { required: true })}/>
                {errors.fee && <span>No empty field allowed</span>}
                
                <input className='add-in-btn' type="submit" value="Post"/>
            </form>
    </div>
  )
}

export default AddBlog;
