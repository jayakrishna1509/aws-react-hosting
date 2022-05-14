import React, {useEffect} from 'react';
import "./Home.css";
import Nav from './Navbar';

function Home() {

    useEffect( () => {
        if(localStorage.getItem('user-info')){
            window.location.href = '/user/Dashboard'; 
        }
    })

    return (
        <div>
            <Nav/>
            <div className='home-container' id='home'>
                <div className='intro'>
                    <h3> Welcome to my <span> Placement Cell </span> </h3>
                    <hr />

                    <div className='social-links'>
                        <ul>
                            <li> <a href='#'> <i className="fa-brands fa-linkedin-in"></i> </a> </li>
                            <li> <a href='#'> <i className="fa-brands fa-facebook-square"></i> </a> </li>
                            <li> <a href='#'> <i className="fa-brands fa-instagram"></i> </a> </li>
                            <li> <a href='#'> <i className="fa-brands fa-youtube"></i> </a> </li>
                        </ul>
                    </div>

                </div>
                <i className="fa-solid fa-briefcase"></i>
            </div>
        </div>
    );
}

export default Home;