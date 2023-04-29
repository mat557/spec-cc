import React from 'react'
import MarksTable from './MarksTable'
import { useSelector } from 'react-redux'

const Stdmarks = () => {
    
    const { user , isLoading } = useSelector(state => state.auth)
  return (
    <MarksTable marks={user.marks}></MarksTable>
  )
}

export default Stdmarks