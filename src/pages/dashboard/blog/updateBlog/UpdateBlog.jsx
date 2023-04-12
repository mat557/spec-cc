import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDeleteBlogMutation, useGetBlogQuery } from '../../../feature/blog/blogEndspoint';
import UpdateSingleBlog from './UpdateSingleBlog';

const UpdateBlog = () => {
  const { data } = useGetBlogQuery();
  const [ deleteBlog , { isLoading , isError, error} ] = useDeleteBlogMutation();
  const [isOpen,setIsOpen] = useState(false);
  const [id,setId] = useState({});


  const handleDeleteBlog = (data) =>{
      var id = data._id;
      deleteBlog({id});
      toast.success(`Blog deleted successfully with the id ${data._id}`);
  }

  const handleModalBlog = ( course ) =>{
    setIsOpen(!isOpen);
    setId(course);
  }



return (
  <div style={{marginTop:"50px",paddingBottom:"30px"}} className='postBlogHolder'>
      {isError && <p>{error}</p>}
      <h1>Update Blog</h1>
            <div style={{overflow:"scroll"}}>
              <table>
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>catagory</th>
                        <th>Title</th>
                        <th>description</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data?.map((blog,index)=><tr key={index}>
                            <td>{index + 1}</td>
                            <td>{blog.catagory}</td>
                            <td>{blog.title}</td>
                            <td>{blog.description.length<41 ? blog.description : blog.description.substring(0,40)+"..." }</td>
                            <td><button onClick={()=> handleDeleteBlog(blog)}>Delete</button></td>
                            <td><button onClick={()=> handleModalBlog(blog)}>Update</button></td>
                        </tr>)
                }
                </tbody>
              </table>
              <UpdateSingleBlog
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleModalBlog={handleModalBlog}
                id={id}
            ></UpdateSingleBlog>
            </div>
  </div>
)
}

export default UpdateBlog