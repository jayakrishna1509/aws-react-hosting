import React, { useState } from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [showMenu, setMenu] = useState(false);

    {/* Changing Navbar Background on scrolling */ }
    const [showNavBack, setNavBack] = useState(false);
    const changeNavBack = () => {
        if (window.scrollY > 0) {
            setNavBack(true);
        }
        else {
            setNavBack(false);
        }
    }
    window.addEventListener('scroll', changeNavBack);


    return (
        <div>

            <nav className={showNavBack ? 'nav nav-active' : 'nav'}>
                <h1 className="logo"> <a href="/"> PLACEMENTS </a> </h1>
                <ul>

                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <li>
                                    <div className='dropdown'>
                                        <NavLink to='#' className='nav-link'>
                                            <i className="fa-solid fa-bell" style={{ color: '#414040' }}></i>
                                        </NavLink>
                                        <div className="dropdown-content">
                                            <div className='dropdown-select' href="#">
                                                <NavLink to='#' className='logo-nav-link'>Notification</NavLink>
                                            </div>
                                            <div className='dropdown-select' href="#">
                                                <NavLink to='#' className='logo-nav-link'>Notification</NavLink>
                                            </div>
                                            <div className='dropdown-select' href="#">
                                                <NavLink to='#' className='logo-nav-link'>Notification</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='dropdown'>
                                        <NavLink to='#' className='nav-link'>
                                            <i className="fa-solid fa-circle-user" title='Profile' style={{ color: '#414040' }}></i>
                                        </NavLink>
                                        <div className="dropdown-content">
                                            {
                                                JSON.parse(localStorage.getItem('user-info')).isAdmin === false ?
                                                    <>
                                                        <NavLink to='/user/Profile' className={({ isActive }) => (isActive ? 'active  logo-nav-link' : 'inactive  logo-nav-link')}>
                                                            <div className='dropdown-select'>
                                                                Profile
                                                            </div>
                                                        </NavLink>
                                                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active  logo-nav-link' : 'inactive  logo-nav-link')}>
                                                            <div className='dropdown-select'>
                                                                Edit
                                                            </div>
                                                        </NavLink>
                                                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active logo-nav-link' : 'inactive  logo-nav-link')}>
                                                            <div className='dropdown-select'>
                                                                Resume
                                                            </div>
                                                        </NavLink>
                                                    </>
                                                    :
                                                    <>
                                                        <NavLink to='/user/Profile' className={({ isActive }) => (isActive ? 'active  logo-nav-link' : 'inactive  logo-nav-link')}>
                                                            <div className='dropdown-select'>
                                                                Profile
                                                            </div>
                                                        </NavLink>
                                                        <NavLink to='/' className={({ isActive }) => (isActive ? 'active  logo-nav-link' : 'inactive  logo-nav-link')}>
                                                            <div className='dropdown-select'>
                                                                Edit
                                                            </div>
                                                        </NavLink>
                                                    </>
                                            }
                                        </div>
                                    </div>
                                </li>
                            </>
                            :
                            <>
                                <li> <NavLink to='/' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}> HOME </NavLink> </li>
                                <li> <NavLink to='/login' className={({ isActive }) => (isActive ? 'active nav-link' : 'inactive nav-link')}> LOGIN </NavLink> </li>
                            </>
                    }
                    <a onClick={() => setMenu(!showMenu)}> <i className="fa-solid fa-bars"></i> </a>
                </ul>
            </nav>

            <div className={showMenu ? "mob-nav" : "mob-nav-toggle"}>
                <ul>
                    <li> <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : 'inactive')}> HOME </NavLink> </li>
                    <li> <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : 'inactive')}> LOGIN </NavLink> </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;