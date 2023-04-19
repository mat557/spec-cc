import React, { useEffect, useState } from 'react';
import Table from './Table';
import './Users.css';
import { useGetAllUserQuery } from '../../feature/api/authApi';
import Loder from '../../shared/loder/Loder';

const Users = () => {
  const {data : users , isLoading , refetch} = useGetAllUserQuery();


  if(isLoading){
    return <Loder></Loder>
  }

  return (
    <div>
      <h1 style={{color:'white',marginLeft:'20px'}}>Users</h1>
      <div className='table-holder'>
        <table>
            <thead>
                <tr>
                    <th>Serial</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>User Name</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                users?.map((user,index)=><Table
                user={user}
                key={index}
                index={index}
                refetch={refetch}
                ></Table>)
            }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users;