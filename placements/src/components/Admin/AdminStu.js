import React from 'react';
import '../Student/StudentPractice.css';

function AdminStu() {
    return (
        <div className='dashboard'>
            <h3> Practice Tests </h3>

            <table className="table">
                <thead>
                    <tr className='test-table-title'>
                        <th scope="col"></th>
                        <th scope="col">Name</th>
                        <th scope="col">CGPA</th>
                    </tr>
                </thead>
                <tbody >
                    
                    <tr className='test-table-data'>
                        <th scope="row">1</th>
                        <td className='test-title'>Abhi</td>
                        <td className='test-submits'>6.4</td>
                    </tr>

                    <tr className='test-table-data'>
                        <th scope="row">2</th>
                        <td className='test-title'>Pranav</td>
                        <td className='test-submits'>7.4</td>
                    </tr>

                    <tr className='test-table-data'>
                        <th scope="row">3</th>
                        <td className='test-title'>Sai</td>
                        <td className='test-submits'>8.4</td>
                    </tr>
                    <br />
                    <button className='btn btn-primary'> ADD </button>
                    

                </tbody>
            </table>

        </div>
    );
}

export default AdminStu;