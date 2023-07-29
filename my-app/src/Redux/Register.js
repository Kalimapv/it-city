import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
import { registration } from './Regslice';
import { useNavigate,Link} from 'react-router-dom';
import userData from './Regslice'

export default function Register() {

 
  const dispatch = useDispatch();
  const [name, setCustomername] = useState('');
  const [email, setCustomeremail] = useState('');
  const [password, setPassword] = useState('');
  // const [formErrors, setFormErrors] = useState({});
  
  // const navigate = useNavigate()
  const handleSubmit = (e) => {

    e.preventDefault();
    dispatch(registration({ name, email, password}));
    console.log("Form is valid");
  };

  // const validateForm = () => {
  //   let errors = {};
  //   let isValid = true;

    // validate first name
    // if (!name.trim()) {
    //   errors.name = "name is required";
    //   isValid = false;
    // }

    // validate email
    // if (!email.trim()) {
    //   errors.email = "Email is required";
    //   isValid = false;
    // } else if (
    //   !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    // ) {
    //   errors.email = "Invalid email address";
    //   isValid = false;
    // }

    // validate password
    // if (!password.trim()) {
    //   errors.password = "Password is required";
    //   isValid = false;
    // } else if (password.length < 6) {
    //   errors.password = "Password must be at least 6 characters long";
    //   isValid = false;
    // }

    // validate confirm password
  //   if (password.trim()) {
  //     errors.confirmPassword = "Confirm password is required";
  //     isValid = false;
  //   } else if (password !== password) {
  //     errors.confirmPassword = "Passwords do not match";
  //     isValid = false;
  //   }
  //   setFormErrors(errors);
  //   return isValid;
  // };

  return (  
       <div>
    <div className='sign-div p-4' >
    <h1 className='text-center'>Register</h1>
                <form className='signin-form'onSubmit={handleSubmit}>
                  <div className='user'>
                  <h5>Name</h5>
                    <input
                        className='signin'
                        type='text'
                        name='name'
                        placeholder='Name'
                        value={userData.name}
                    />
                    <div className='mail'>
                  <h5>Email</h5>
                    <input
                        className='signin'
                        type='email'
                        name='email'
                        placeholder='Email Address'
                        value={userData.email}
                    />
                    </div>
                    </div>
                    <div className='pass'>
                    <h5 className='mt-2'>Password</h5>
                    <input
                        className='signin'
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={userData.password}
                    />
                </div>                    
                    <button className='signin-btn'>Sign Up</button>
                </form>     
            </div>
            </div>
  );
}