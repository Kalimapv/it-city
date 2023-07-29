import React from 'react'
import './Login.css'
import { useDispatch, useSelector } from 'react-redux'
import { login,getToken } from './Regslice'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getToken);
  console.log("token",token);

const handleSubmit = (e) => {
  e.preventDefualt();
  const customer_email = e.targt.customer_email.value;
  const password = e.targt.password.value;
  dispatch(login({customer_email :customer_email, password :password }))
  navigate('/');
  }  
  return (
    <div>
      <div className='sign-div p-4' >
        <h1 className='text-center'>Login</h1>
            <form className='signin-form'onSubmit={handleSubmit}>
              <div className='user'>
                <h5>Username</h5>
                <input
                  className='signin'
                  type='email'
                  name='name'
                  placeholder='Username,Phone Number or Email Address'
                  />
              </div>
              <div className='pass'>
                <h5 className='mt-2'>Password</h5>
                <input
                  className='signin'
                  type='password'
                  name='password'
                  placeholder='Password'
                  />
              </div>                    
              <button className='signin-btn'>Sign In</button>
            </form>
            <div className='account'>
              <h6>Don't You have an account?  <Link to='/register' className='link_sty'> Sign Up</Link></h6>
            </div>
      </div>
    </div>
  )
}

export default Login;