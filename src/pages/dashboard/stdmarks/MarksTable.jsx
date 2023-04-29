import React from 'react';

const MarksTable = ({ marks }) => {
  return (
    <div style={{overflowX:'scroll'}}>
        <table style={{width:"95%",margin:"0 auto"}}>
            <thead>
                <tr>
                    <th>Exam ID</th>
                    <th>Exam No</th>
                    <th>MCQ Marks</th>
                    <th>CQ Marks</th>
                    <th>Total Marks</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(marks).map(([examId, examMarks]) => {
                return examMarks.map((marks, index) => {
                    const { mcq_m, cq__m, exm_n, total } = marks;
                    return (
                    <tr key={`${examId}-${index}`}>
                        {index === 0 && <td rowSpan={examMarks.length}>{examId}</td>}
                        <td>{exm_n}</td>
                        <td>{mcq_m}</td>
                        <td>{cq__m}</td>
                        <td>{total}</td>
                    </tr>
                    );
                });
                })}
            </tbody>
        </table>
    </div>
  );
};

export default MarksTable;