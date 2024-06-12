'use client'

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Card, CardBody } from "@nextui-org/card";
import { Button } from '@nextui-org/react';
import React from 'react';
import './signup.css';

export default function SignUpForm(){
    const [isVisible, setIsVisible] = React.useState(false)
    const toggleVisibility = () => setIsVisible(!isVisible);

    return(
        <div className="wrapper">
        <Card className="card">
            <h1>SignUp</h1>
            <CardBody className="content-cover">
            <form>
                <div className="username">
                <label>
                <input className='input' required
                type="text"
                placeholder="Username"
                value='username'
                /><AccountBoxIcon className="icon"/>
                </label>
                </div>

                <div className="email">
                <label>
                <input className='input' required
                type="email"
                placeholder="Email Address"
                value='emailaddress'
                /><EmailIcon className="icon"/>
                </label>
                </div>

                <div className="password">
                <label>
                <input className="input pass" required
                type={isVisible ? "text":"password" }
                placeholder="Password"
                value='password'/>
                <LockIcon className="icon"/>
                <button className='btn' onClick={toggleVisibility}>
                {isVisible ? (
                <VisibilityIcon className='eye'/>):(
                    <VisibilityOffIcon/>
                )}
                </button>
                </label>
                </div>

                <div className="password">
                <label>
                <input className="input pass" required
                type={isVisible ? "text": "password"}
                placeholder="Confirm Password"
                value='confirmpassword'
                />
                <LockIcon className="icon"/>
                <button className='btn'
                onClick={toggleVisibility}>
                    {isVisible ? (
                <VisibilityIcon className='eye'/>):(
                    <VisibilityOffIcon/>
                )}
                </button>
                </label>
                </div>

                <div className='remember'>
                <label>
                <input type="checkbox" />Accept Terms & Conditions
                </label>
                <a href="/terms" className="forgot">Terms & Conditions</a>
                </div>
                <div><Button type="submit" className="mt-2" style={{width:"100%", fontWeight:"bolder", fontSize:"18px"}}
                variant='ghost' color='primary' >SignUp</Button>
                </div>
                <div className="remember">
                <p>Already Have an Account?
                <a href="/login">LogIn</a></p>
                </div>
            </form>
            </CardBody>
        </Card>
        </div>
    )
}