import React from 'react';
import { useSelector } from 'react-redux';
import ChartById from './ChartById/ChartById';
import Loder from '../../shared/loder/Loder';

const StdAnalytics = () => {
    const { user , isLoading } = useSelector(state => state.auth)
    // console.log(user.marks)

    if(isLoading){
        <Loder></Loder>
    }


    const charts = [];

    for(let id in user.marks){
        if(user.marks.hasOwnProperty(id)){
            charts.push(<ChartById key={id} collection={user.marks}></ChartById>)
        }
    }


  return (
    <div>
        {charts}
    </div>
  )
}

export default StdAnalytics