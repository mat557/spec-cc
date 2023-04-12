import React from 'react';
import { toast } from 'react-hot-toast';
import { useDeleteBlogMutation, useGetBlogQuery } from '../../../feature/blog/blogEndspoint';
import Loder from '../../../shared/loder/Loder';

const UpdateBlog = () => {
  const { data , refetch} = useGetBlogQuery();
  const [ deleteBlog , { isLoading , isError, error} ] = useDeleteBlogMutation();
  
  if(isLoading){
    return <Loder></Loder>
  }

  const handleDeleteBlog = (data) =>{
      var id = data._id;
      deleteBlog({id});
      refetch();
      toast.success(`Blog deleted successfully with the id ${data._id}`);
  }

  const handleModalBlog = ( course ) =>{
      
  }



return (
  <div style={{marginTop:"50px",paddingBottom:"30px"}} className='postBlogHolder'>
      <h1>Update Blog</h1>
            <div style={{overflow:"scroll"}}>
              <table>
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>id</th>
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
                            <td>{blog._id}</td>
                            <td>{blog.catagory}</td>
                            <td>{blog.title}</td>
                            <td>{blog.description.length<41 ? blog.description : blog.description.substring(0,40)+"..." }</td>
                            <td><button onClick={()=> handleDeleteBlog(blog)}>Delete</button></td>
                            <td><button onClick={()=> handleModalBlog(blog)}>Update</button></td>
                        </tr>)
                }
                </tbody>
              </table>
            </div>
  </div>
)
}

export default UpdateBlog