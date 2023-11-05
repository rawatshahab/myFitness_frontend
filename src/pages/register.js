import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import {useNavigate} from "react-router-dom"
import "./mix.css"

const Register = () => {

  const [passhow,setPassShow] = useState(false);

  const [inputdata,setInputdata] = useState({
    fname:"",
    email:"",
    password:""
  });

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{textAlign:"center"}}>We are glad that you will be using Project Cloud to manage
              your tasks! We hope that you will get like it.</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input type="text" name="fname" id=""  placeholder='Enter Your Name' />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id=""    placeholder='Enter Your Email Address' />
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


            <button className='btn' >Sign Up</button>
            <p>Don't have and account </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Register