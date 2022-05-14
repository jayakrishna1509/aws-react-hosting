import React from 'react';
import './Dashboard.css';

function StudentCompany() {
    return (
        <div className='dashboard'>
            <h3> Apply Companies </h3>
            <div className='recents'>
                <div className='recents-box'>
                    <hr />
                    <div className='activity-msg-box'>

                        <div className='activity-msg'>
                            <div className='activity-msg-info'>
                                <div className='activity-title'> Infosys Coding Challange </div>
                                <div className='activity-time'> <span> 5 </span> hours ago </div>
                            </div>
                            <div className='activity-msg-btns'>
                                <button className='btn btn-info'> VIEW </button> &nbsp;
                                <button className='btn btn-secondary'> APPLY </button>
                            </div>
                        </div>

                        <div className='activity-msg'>
                            <div className='activity-msg-info'>
                                <div className='activity-title'> Infosys Coding Challange </div>
                                <div className='activity-time'> <span> 5 </span> hours ago </div>
                            </div>
                            <div className='activity-msg-btns'>
                                <button className='btn btn-info'> VIEW </button> &nbsp;
                                <button className='btn btn-secondary'> APPLY </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default StudentCompany;