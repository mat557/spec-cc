import React from 'react'
import ApplyAsTeacher from './applyAsTeacher/ApplyAsTeacher';
import Comments from './comments/Comments';
import Landing from './landing/Landing';

const Home = () => {
  return (
    <>
        <Landing></Landing>
        <Comments></Comments>
        <ApplyAsTeacher></ApplyAsTeacher>
    </>
  )
}

export default Home;