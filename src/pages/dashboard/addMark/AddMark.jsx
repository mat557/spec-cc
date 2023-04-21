import React, { useState } from 'react';
import { useGetAllCoursesQuery } from '../../feature/course/courseEndpoints';
import { useForm } from "react-hook-form";
import Loder from '../../shared/loder/Loder';
import { toast } from 'react-hot-toast';
import AdmarkPopUp from './admarkPopUp/AdmarkPopUp';
import './AddMark.css';

const AddMark = () => {
    const { data , isLoading } = useGetAllCoursesQuery();
    const {  handleSubmit , register , reset } = useForm();
    const [id,setId] = useState('');



    const onSubmit = (data) => {
        if(!data.id){
            toast.error("Nothing selected!", {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200',
                },
                iconTheme: {
                  primary: 'red',
                  secondary: '#FFFAEE',
                },
            })
        }else if(data.id){
            toast.success(`Showing result for ${data.id}`, {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: 'green',
                },
                iconTheme: {
                  primary: 'green',
                  secondary: '#FFFAEE',
                },
            })
            setId(data.id)
            reset();
        }
      };

    

    if(isLoading){
        return <Loder></Loder>
    }

    // console.log(control)

  return (
    <div className='atg'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("id")}>
                <option value="">Please select an option</option>
                {data.map(sub =><option key={sub._id} value={sub._id}>{sub.subject}</option>) }
            </select>
            <button type="submit">Submit</button>
        </form>

        <AdmarkPopUp
            id={id}
            setId={setId}
        ></AdmarkPopUp>
    </div>
  )
}

export default AddMark