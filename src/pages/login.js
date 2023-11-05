import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

import Spinner from 'react-bootstrap/Spinner';
import "./mix.css"

const Login = () => {

    const [ setEmail] = useState("");
    const [spiner] = useState(false);
    const [passhow,setPassShow] = useState(false);
   



   

    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are you glad you are back. Please login.</p>
                    </div>
                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id=""  placeholder='Enter Your Email Address' />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className='two'>
                            <input type={!passhow ? "password" : "text"} name="password" id=""   placeholder='Enter Your password' />
                            <div className='showpass' onClick={()=>setPassShow(!passhow)} >
              {!passhow ? "Show" : "Hide"}
              </div>
                         </div>
                        </div>
                        
                        <button className='btn' >Login
                        {
                            spiner ? <span><Spinner animation="border" /></span>:""
                        }
                        </button>
                        <p>Don't have and account <NavLink to="/register">Sing up</NavLink> </p>
                    </form>
                </div>
                <ToastContainer />
            </section>
        </>
    )
}

export default Login