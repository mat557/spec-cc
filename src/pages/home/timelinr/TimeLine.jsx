import React from 'react';
import { BiRightArrowAlt , BiLeftArrowAlt } from "react-icons/bi";
import './TimeLine.css';

const TimeLine = () => {
  return (
    <div className='time-line'>

        <div className="containerr left-container">
            <BiRightArrowAlt  className='totti'></BiRightArrowAlt>
            <div className="text-box">
                <h2>Never skip our online classes</h2>
                <small>Classes make the subject fun...</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis debitis reprehenderit placeat sapiente explicabo eveniet, qui adipisci necessitatibus. Consectetur odit officia eius. Dolor quisquam alias pariatur soluta adipisci veniam.</p>
                <span className='left-container-arrow'></span>
            </div>
        </div>

        <div className="containerr right-container">
        <BiLeftArrowAlt className='totti'></BiLeftArrowAlt>
            <div className="text-box">
                <h2>Be regular at our exams and assignments.</h2>
                <small>Practice makes a man perfect</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis debitis reprehenderit placeat sapiente explicabo eveniet, qui adipisci necessitatibus. Consectetur odit officia eius. Dolor quisquam alias pariatur soluta adipisci veniam.</p>
                <span className='right-container-arrow'></span>
            </div>
        </div>

        <div className="containerr  left-container">
        <BiRightArrowAlt className='totti'></BiRightArrowAlt>
            <div className="text-box">
                <h2>Grow as a teacher with access to the best training and development facilities.</h2>
                <small>Maximize your potential.</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis debitis reprehenderit placeat sapiente explicabo eveniet, qui adipisci necessitatibus. Consectetur odit officia eius. Dolor quisquam alias pariatur soluta adipisci veniam.</p>
                <span className='left-container-arrow'></span>
            </div>
        </div>

        <div className="containerr right-container">
        <BiLeftArrowAlt className='totti'></BiLeftArrowAlt>
            <div className="text-box">
                <h2>Check blogs and ask questions in feed!</h2>
                <small>A great way to stay up to date!</small>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error officiis debitis reprehenderit placeat sapiente explicabo eveniet, qui adipisci necessitatibus. Consectetur odit officia eius. Dolor quisquam alias pariatur soluta adipisci veniam.</p>
                <span className='right-container-arrow'></span>
            </div>
        </div>

    </div>
  )
}

export default TimeLine