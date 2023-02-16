import React, { useState } from 'react'

const EditCourse = () => {
    const [courses,setCourses] = useState([]);
  return (
    <div className='edit-course'>
        <p style={{color:"white",marginLeft:"20px"}}>Edit Your Course</p>
      <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>User Name</th>
                    <th>User Name</th>
                    <th>User Name</th>
                    <th>User Name</th>
                    <th>User Name</th>
                </tr>
            </thead>
            <tbody>
            {
                courses.map((course,index)=><tr key={index}>
                        <td>Bro</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>)
            }
            </tbody>
        </table>
    </div>
  )
}

export default EditCourse;