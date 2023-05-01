import React from 'react';
import { useGetAllCoursesQuery } from '../../feature/course/courseEndpoints';
import { useGetAllUserQuery } from '../../feature/api/authApi';
import { useGetFeedItemCOuntQuery } from '../../feature/blog/blogEndspoint';
import './Stat.css';

const Stat = () => {
  const { data , isLoading} = useGetAllCoursesQuery();
  const {data : users , refetch} = useGetAllUserQuery();
  const { data:question } = useGetFeedItemCOuntQuery();

  return (
        <div class="stat-container">
                <div class="stat-card">
                    <div class="stat-card-header">
                    <h3>Courses</h3>
                    </div>
                    <div class="stat-card-body">
                    <p class="stat-metric"><span style={{color:'green'}}> {data?.length}+</span></p>
                    <p class="stat-change positive">Vast collection of courses</p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-card-header">
                    <h3>Users</h3>
                    </div>
                    <div class="stat-card-body">
                    <p class="stat-metric"><span style={{color:'purple'}}> {users?.length}+</span></p>
                    <p class="stat-change negative">Users connected altogether</p>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-card-header">
                    <h3>Feed Stat..</h3>
                    </div>
                    <div class="stat-card-body">
                    <p class="stat-metric"><span style={{color:"green"}}> {question}+</span></p>
                    <p style={{color:"green"}} class="stat-change">Questions overall!</p>
                    </div>
                </div>
        </div>

  )
}

export default Stat