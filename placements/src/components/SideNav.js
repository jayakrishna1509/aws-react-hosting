import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './SideNav.css'

function StudentSideNav() {
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            window.location.href = 'login';
        }
    })

    {/* Logout Functioning */}
    function logout(e) {
        localStorage.removeItem('user-info');
        window.location.href = '/login';
    }

    return (
        <div>
            <div className='sideNav'>
                <ul>
                    {
                        JSON.parse(localStorage.getItem('user-info')).isAdmin === false ?
                            <>
                                <li>
                                    <NavLink to='/user/Dashboard' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                        <div className='icons-title'>
                                            <i className="fa-solid fa-qrcode"></i>
                                            <h4> Dashboard </h4>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/user/StudentPractice' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                        <div className='icons-title'>
                                            <i className="fa-solid fa-terminal"></i>
                                            <h4> Practice </h4>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/user/Drives' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                        <div className='icons-title'>
                                            <i className="fa-solid fa-building"></i>
                                            <h4> Drives </h4>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                        <div className='icons-title' onClick={logout}>
                                            <i className="fa-solid fa-right-from-bracket"></i>
                                            <h4> Logout </h4>
                                        </div>
                                    </NavLink>
                                </li>
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to='/user/Dashboard' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                        <div className='icons-title'>
                                            <i className="fa-solid fa-qrcode"></i>
                                            <h4> Dashboard </h4>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/user/AdminStu' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                        <div className='icons-title'>
                                            <i className="fa-solid fa-graduation-cap"></i>
                                            <h4> Students </h4>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/user/Drives' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                        <div className='icons-title'>
                                            <i className="fa-solid fa-building"></i>
                                            <h4> Drives </h4>
                                        </div>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/login' className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                                        <div className='icons-title' onClick={logout}>
                                            <i className="fa-solid fa-right-from-bracket"></i>
                                            <h4> Logout </h4>
                                        </div>
                                    </NavLink>
                                </li>
                            </>
                    }
                </ul>
            </div>
            <Outlet />
        </div>
    );
}

export default StudentSideNav;