import React, { useEffect, useState } from 'react';
import "./Login.css";

function Login() { 

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    useEffect( () => {
        if(localStorage.getItem('user-info')){
            window.location.href = '/user/Dashboard'; 
        }
    })

    async function loginAuth(event) {

        event.preventDefault()

        const response = await fetch('http://localhost:3001/userAuth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify ({
                email,
                pwd
            })
        })

        const data = await response.json()

        if(data.user) {
            alert('Welcome');
            localStorage.setItem('user-info', JSON.stringify(data))

            if(JSON.parse(localStorage.getItem('user-info')).isAdmin === false){
                window.location.href = '/user/Dashboard';
            }
            else{
                window.location.href = '/user/Dashboard';
            }
        }
        else {
            alert('Please check your email or password')
        }
    }


    return (
        <div className="center">
            <h1>LOGIN</h1>

            <form onSubmit={loginAuth}>

                <div className="txt_field">
                    <input type="text" required autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <span></span>
                    <label>Email</label>
                </div>

                <div className="txt_field">
                    <input type="password" required value={pwd} onChange={(e) => setPwd(e.target.value)} />
                    <span></span>
                    <label>Password</label>
                </div>

                <div className="pass">Forgot Password?</div>
                <input type="submit" value="Login" />

                <div className="signup_link">
                    Not a member? <a href="#">Signup</a>
                </div>

            </form>
        </div>
    );
}

export default Login;