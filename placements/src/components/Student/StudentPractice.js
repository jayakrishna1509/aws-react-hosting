import React from 'react';
import './StudentPractice.css';


function StudentPractice() {
    return (
        <div className='dashboard'>
            <h3> Practice Tests </h3>

            <table className="table">
                <thead>
                    <tr className='test-table-title'>
                        <th scope="col"></th>
                        <th scope="col">Title</th>
                        <th scope="col">Submission</th>
                        <th scope="col">Difficulty</th>
                    </tr>
                </thead>
                <tbody >
                    
                    <tr className='test-table-data'>
                        <th scope="row">1</th>
                        <td className='test-title'>Good Pairs</td>
                        <td className='test-submits'>5516</td>
                        <td> <span className="badge bg-primary" style={{textTransform: 'uppercase'}}> Med </span> </td>
                    </tr>

                    <tr className='test-table-data'>
                        <th scope="row">2</th>
                        <td className='test-title'>Good Pairs</td>
                        <td className='test-submits'>5516</td>
                        <td> <span className="badge bg-primary" style={{textTransform: 'uppercase'}}> Med </span> </td>
                    </tr>

                    <tr className='test-table-data'>
                        <th scope="row">3</th>
                        <td className='test-title'>Good Pairs</td>
                        <td className='test-submits'>5516</td>
                        <td> <span className="badge bg-primary" style={{textTransform: 'uppercase'}}> Med </span> </td>
                    </tr>

                </tbody>
            </table>

        </div>
    );
}

export default StudentPractice;