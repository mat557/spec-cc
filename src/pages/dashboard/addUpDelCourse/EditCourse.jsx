import { useState } from 'react';
import { useDeleteCourseMutation, useGetAllCoursesQuery } from '../../feature/course/courseEndpoints';
import Loder from '../../shared/loder/Loder';
import './Course.css';
import Update from './update/Update';

const EditCourse = () => {
    const { data , isLoading , isError } = useGetAllCoursesQuery();
    const [ deleteCourse ] = useDeleteCourseMutation();
    const [isOpen,setIsOpen] = useState(false);
    const [id,setId] = useState({});



    if(isLoading){
        return <Loder></Loder>
    }


    const handleDelete = (data) =>{
        deleteCourse(data);
    }

    const handleModal = ( course ) =>{
        setIsOpen(!isOpen);
        setId(course)
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
                    data?.map((course,index)=><tr key={index}>
                            <td>{index + 1}</td>
                            <td>{course.subject}</td>
                            <td>{course.classNumber}</td>
                            <td>{course.exams}</td>
                            <td>{course.fee}</td>
                            <td><button onClick={()=> handleDelete(course)}>Delete</button></td>
                            <td><button onClick={()=> {handleModal(course)}}>Update</button></td>
                            <td><button>Add Video</button></td>
                        </tr>)
                }
                </tbody>
            </table>
            <Update
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                handleModal={handleModal}
                id={id}
            ></Update>
    </div>
  )
}

export default EditCourse;