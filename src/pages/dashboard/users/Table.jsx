import React from 'react'

const Table = (user) => {
  return (
        <tr>
            <td>{user.user.name}</td>
            <td>{user.user.email}</td>
            <td>{user.user.username}</td>
            <td>{user.user.username}</td>
            <td>{user.user.username}</td>
            <td>{user.user.username}</td>
            <td>{user.user.username}</td>
        </tr>
  )
}

export default Table;