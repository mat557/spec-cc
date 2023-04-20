import React from 'react';
import {usePromoteUserToBloggerMutation} from './../../feature/api/authApi'
import Loder from '../../shared/loder/Loder';
import { toast } from 'react-hot-toast';
import './Table.css';


const Table = ({user,index,refetch}) => {
  const [ promoteUserToBlogger , { isLoading }]  = usePromoteUserToBloggerMutation()


  // if(isLoading){
  //   return <Loder></Loder>
  // }

  const handlePromoteBlogAction = (email) =>{
    promoteUserToBlogger(email);
    toast.success("The user is promoted to blog writer!");
    refetch();
  }
 

  return (
        <tr>
            <td>{index+1}</td>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>{user?.name}</td>
            <td>{user?.role}</td>
            <td>{user?.role == "blogger" ? <button >remove blogger</button> : <button onClick={() => handlePromoteBlogAction(user.email)}>promote to blogger</button>}</td>
        </tr>
  )
}

export default Table;