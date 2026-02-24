import React from "react";
import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='ID number' required />
                    <FaUser className='icon'/>
                </div>
                 <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <button type="submit">Let's Play!</button>
            </form>
        </div>
    )
}

export default Login;