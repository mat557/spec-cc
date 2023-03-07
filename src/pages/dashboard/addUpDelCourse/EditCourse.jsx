import { useDeleteCourseMutation, useGetAllCoursesQuery } from '../../feature/course/courseEndpoints';
import Loder from '../../shared/loder/Loder';
import './Course.css';

const EditCourse = () => {
    const { data , isLoading , isError } = useGetAllCoursesQuery();
    const [ deleteCourse ] = useDeleteCourseMutation();


    if(isLoading){
        return <Loder></Loder>
    }


    const handleDelete = (data) =>{
        deleteCourse(data);
    }


    return (
    <div className='edit-course'>
    <p style={{color:"white",marginLeft:"20px"}}>Edit Your Course</p>
      <table>
            <thead>
                <tr>
                    <th>Serial</th>
                    <th>Subject</th>
                    <th>Classes</th>
                    <th>Exams</th>
                    <th>Price</th>
                    <th>Action</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map((course,index)=><tr key={course?._id}>
                        <td>{index + 1}</td>
                        <td>{course.subject}</td>
                        <td>{course.classNumber}</td>
                        <td>{course.exams}</td>
                        <td>{course.fee}</td>
                        <td><button onClick={()=> handleDelete(course)}>Delete</button></td>
                        <td><button>Update</button></td>
                        <td><button>Add Video</button></td>
                    </tr>)
            }
            </tbody>
        </table>
    </div>
  )
}

export default EditCourse;