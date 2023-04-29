import React, { useState } from 'react';
import { useGetStudentByIdQuery, useInsertUserMarksMutation } from '../../../feature/api/authApi';
import Loder from '../../../shared/loder/Loder';
import { useGetSingleCourseQuery } from '../../../feature/course/courseEndpoints';
import './AdmarkPopUp.css';
import { toast } from 'react-hot-toast';

const AdmarkPopUp = ({id,setId}) => {
    const [inputValues, setInputValues] = useState({});
    // console.log(id)
    const { data , isLoading , isFetching , isSuccess , isError , error } = useGetStudentByIdQuery(id);
    const { data : name , isLoading2} = useGetSingleCourseQuery(id);
    const [ insertUserMarks , { isLoading1  , isError1 } ] = useInsertUserMarksMutation();


    if(isLoading || isLoading1 || isLoading2){
        return <Loder></Loder>
    }
    var length = data?.length;
    const handleInputChange = (event, rowIndex) => {
        const { name, value  } = event.target;
        const email = data[rowIndex].email
        
        setInputValues(prevValues => ({
            ...prevValues,
            [`em_l-${rowIndex}`]: email,
            [name]: value,
        }));
    };

    const handleGetValues = (tag,marks,len) => {
        insertUserMarks({tag,marks,len})
        .then((data) => {
            console.log(data.data.message);
            toast.success(`${data.data.message}`)
        })
        .catch((error) => {
            console.error('An error occurred:', error);
        });
        setInputValues({})
    };
    
    


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
                                    name={`cq_m-${index}`}
                                    type="number"
                                    value={inputValues[`cq_m-${index}`] || ''}
                                    onChange={event => handleInputChange(event, index)}
                                ></input></td>


                                <td><input 
                                    style={{backgroundColor:"#433",border:"none"}}
                                    name={`mcqm-${index}`}
                                    type="number"
                                    value={inputValues[`mcqm-${index}`] || ''}
                                    onChange={event => handleInputChange(event, index)}
                                ></input></td>


                                <td><input 
                                    style={{backgroundColor:"#433",border:"none"}}
                                    name={`exNo-${index}`}
                                    type="number"
                                    value={inputValues[`exNo-${index}`] || ''}
                                    onChange={event => handleInputChange(event, index)}
                                ></input></td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <button style={{backgroundColor:"#444"}} onClick={()=>handleGetValues(id,inputValues,length)}>Insert Marks</button>
            </div>
        </div>
  )
}

export default AdmarkPopUp