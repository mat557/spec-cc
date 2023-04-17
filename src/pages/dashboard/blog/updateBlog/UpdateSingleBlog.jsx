import React from 'react';
import { FiMinimize2  } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useUpdateBLogMutation } from '../../../feature/blog/blogEndspoint';
import './UpdateSingleBlog.css'
import { toast } from 'react-hot-toast';

const UpdateSingleBlog = ({ isOpen , handleModalBlog , id , setIsOpen }) => {

    const { register, handleSubmit, watch, formState: { errors } , reset } = useForm();
    const [updateBLog , {isLoading}] = useUpdateBLogMutation();
    


    const onSubmit = (data) => {
        var tag = id._id;
        updateBLog({tag,data})
        toast.success("Blog updated successfully!")
        setIsOpen(!isOpen);
        reset();
      };


  return (
    <div className={isOpen?'modal-holder mod-on':'modal-holder'}>
            <div className={isOpen?'modal-content mod-con-on':'modal-content'}>
                <div onClick={()=>handleModalBlog()} className="modal-btn"><FiMinimize2></FiMinimize2></div>
                <div>
                    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
                        <input     className='form-input' placeholder='Title'   type="text" {...register("title", { required: true })} />
                        <input     className='form-input' placeholder='Catagory'   type="text" {...register("catagory", { required: true })} />
                        <textarea  className='form-textarea' placeholder='Add description'   {...register("description", { required: true })}/>
                        {errors.title && <span>title field is empty</span>}
                        {errors.catagory && <span>catagory field is empty</span>}
                        {errors.description && <span>description field is empty</span>}
                        
                        <input className='form-submit' type="submit" />
                    </form>
                </div>
            </div>
        </div>
  )
}

export default UpdateSingleBlog