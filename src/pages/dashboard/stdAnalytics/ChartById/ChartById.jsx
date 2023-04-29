import React from 'react';
import { useSelector } from 'react-redux';
import {  Bar, BarChart, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import './ChartById.css'

const ChartById = ({collection}) => {
    
    const data = Object.values(collection)
    .flatMap((exam) =>
      exam.map((values) => ({
        total: values.total,
        cq: values.cq__m,
        mcq: values.mcq_m,
      }))
    );

  return (
    <div style={{width:"100%",height:"250px"}}>
        {/* <ResponsiveContainer width="100%" height="250px"> */}
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis/>
                <YAxis dataKey="total"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="cq" fill="#8884d8" />
                <Bar dataKey="mcq" fill="#82ca9d" />
            </BarChart>
          {/* </ResponsiveContainer> */}
    </div>
  )
}

export default ChartById