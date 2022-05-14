import React, { useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {

    return (
        <div className='dashboard'>

            {/* Student Analytics */}
            <div className='student-analytics'>
                {
                    JSON.parse(localStorage.getItem('user-info')).isAdmin === false ?
                        <>
                            <h3> Student Analytics </h3>
                        </>
                        :
                        <>
                            <h3> Admin Analytics </h3>
                        </>
                }
                <br />
                <div className='container-analytics-box'>

                    <div className='analytics-box'>
                        <div className='analytics-icon'>
                            <div className='.circle'></div>
                            <i className="fa-solid fa-terminal"></i>
                        </div>
                        <div className='analytics-data'>
                            <span className='analytics-title'> Coding Tests </span> <br />
                            {
                                JSON.parse(localStorage.getItem('user-info')).isAdmin === false ?
                                    <>
                                        Total Coducted: <span className='analytics-Total-couducted'> 65 </span> <br />
                                        <div className='analytics-progress'>
                                            <progress value="32" max="100" />
                                        </div>
                                        Performance: <span className='analytics-performance'> 62% </span>
                                    </>
                                    :
                                    <>
                                        Total Students: <span className='analytics-Total-couducted'> 65 </span> <br />
                                        Attended Students: <span className='analytics-performance'> 43 </span>
                                        <div className='analytics-progress'>
                                            <progress value="32" max="100" />
                                        </div>
                                        Performance: <span className='analytics-performance'> 62% </span>
                                    </>

                            }
                        </div>
                    </div>

                    <div className='analytics-box'>
                        <div className='analytics-icon'>
                            <i className="fa-solid fa-desktop"></i>
                        </div>
                        <div className='analytics-data'>
                            <span className='analytics-title'> Mocking Tests </span> <br />
                            {
                                JSON.parse(localStorage.getItem('user-info')).isAdmin === false ?
                                    <>
                                        Total Coducted: <span className='analytics-Total-couducted'> 65 </span> <br />
                                        <div className='analytics-progress'>
                                            <progress value="32" max="100" />
                                        </div>
                                        Performance: <span className='analytics-performance'> 62% </span>
                                    </>
                                    :
                                    <>
                                        Total Students: <span className='analytics-Total-couducted'> 65 </span> <br />
                                        Attended Students: <span className='analytics-performance'> 43 </span>
                                        <div className='analytics-progress'>
                                            <progress value="32" max="100" />
                                        </div>
                                        Performance: <span className='analytics-performance'> 62% </span>
                                    </>

                            }
                        </div>
                    </div>

                    <div className='analytics-box'>
                        <div className='analytics-icon'>
                            <i className="fa-solid fa-handshake"></i>
                        </div>
                        <div className='analytics-data'>
                            <span className='analytics-title'> Drives </span> <br />
                            {
                                JSON.parse(localStorage.getItem('user-info')).isAdmin === false ?
                                    <>
                                        Total Drives: <span className='analytics-Total-couducted'> 14 </span> <br />
                                        Applied Drives: <span className='analytics-performance'> 8 </span>
                                    </>
                                    :
                                    <>
                                        Total Drives: <span className='analytics-Total-couducted'> 14 </span> <br />
                                        Finished Drives: <span className='analytics-performance'> 8 </span>
                                    </>

                            }
                        </div>
                    </div>

                </div>

            </div>

            {/* Recent adds */}
            <div className='recents'>
                <h3> Recents </h3>

                <div className='recents-box'>
                    <div className='recents-title'> Activity </div>
                    <hr />
                    <div className='activity-msg-box'>
                        
                        <div className='activity-msg'>
                            <div className='activity-msg-info'>
                                <div className='activity-title'> Infosys Coding Challange </div>
                                <div className='activity-time'> <span> 5 </span> hours ago </div>
                            </div>
                            <div className='activity-msg-btns'>
                                <button className='btn btn-info'> VIEW </button>
                            </div>
                        </div>

                        <div className='activity-msg'>
                            <div className='activity-msg-info'>
                                <div className='activity-title'> Infosys Coding Challange </div>
                                <div className='activity-time'> <span> 5 </span> hours ago </div>
                            </div>
                            <div className='activity-msg-btns'>
                                <button className='btn btn-info'> VIEW </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;