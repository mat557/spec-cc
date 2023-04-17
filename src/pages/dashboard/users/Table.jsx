import React from 'react'

const Table = ({user,index}) => {
  // console.log(index,user)
  return (
        <tr>
            <td>{index+1}</td>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td>{user?.name}</td>
            <td>{user?.role}</td>
            <td><button>promote</button></td>
        </tr>
  )
}

export default Table;