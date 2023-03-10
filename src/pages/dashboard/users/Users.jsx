import React, { useEffect, useState } from 'react';
import Table from './Table';
import './Users.css';

const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch(`https://spc-cc-server.vercel.app/api/v1/app/user`)
        .then(res => res.json())
        .then(uSers =>{
            // console.log(uSers);
            setUsers(uSers);
        })
    },[])



  return (
    <div>
      <h1 style={{color:'white'}}>Users</h1>
      <div className='table-holder'>
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
                users.map((user,index)=><Table
                user={user}
                key={index}
                ></Table>)
            }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users;