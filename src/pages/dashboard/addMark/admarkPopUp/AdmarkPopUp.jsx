import React, { useState } from 'react';
import './AdmarkPopUp.css';
import { useGetStudentByIdQuery } from '../../../feature/api/authApi';
import Loder from '../../../shared/loder/Loder';
import { useGetSingleCourseQuery } from '../../../feature/course/courseEndpoints';

const AdmarkPopUp = ({id,setId}) => {
    // console.log(id)
    const { data , isLoading , isFetching , isSuccess , isError , error } = useGetStudentByIdQuery(id);
    const { data : name , isLoading1} = useGetSingleCourseQuery(id);

    const [inputValues, setInputValues] = useState({});

    const handleInputChange = (event, rowIndex) => {
        const { name, value  } = event.target;
        const email = data[rowIndex].email
        
        setInputValues(prevValues => ({
            ...prevValues,
            [name]: value,
            [`email-${rowIndex}`]: email,
        }));
    };

    const handleGetValues = () => {
        console.log(inputValues);
    };
    
    if(isLoading || isLoading1){
        return <Loder></Loder>
    }


  return (
        <div className={id ? `mark-mod` : `mark-mod-off`}>
            <div className="mark-mod-cont">
            <h3 >Showing result for {name?.subject}</h3>
                <button onClick={() => {setId('');setInputValues({})}} className='bttn'>X</button>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>CQ</th>
                            <th>MCQ</th>
                            <th>Exam No.</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            data?.map((u,index) => <tr key={u._id}>
                                <td>{u._id}</td>
                                <td>{u.name}</td>
                                <td >{u.email}</td>
                                <td><input 
                                    style={{backgroundColor:"#433",border:"none"}}
                                    name={`cq-${index}`}
                                    value={inputValues[`cq-${index}`] || ''}
                                    onChange={event => handleInputChange(event, index)}
                                ></input></td>


                                <td><input 
                                    style={{backgroundColor:"#433",border:"none"}}
                                    name={`mcq-${index}`}
                                    value={inputValues[`mcq-${index}`] || ''}
                                    onChange={event => handleInputChange(event, index)}
                                ></input></td>


                                <td><input 
                                    style={{backgroundColor:"#433",border:"none"}}
                                    name={`exNo-${index}`}
                                    value={inputValues[`exNo-${index}`] || ''}
                                    onChange={event => handleInputChange(event, index)}
                                ></input></td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <button style={{backgroundColor:"#444"}} onClick={handleGetValues}>Insert Marks</button>
                
            </div>
        </div>
  )
}

export default AdmarkPopUp