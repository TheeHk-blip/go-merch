'use client'

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Card, CardBody } from "@nextui-org/card";
import { Button } from '@nextui-org/react';
import React from 'react';
import './login.css';

export default function LoginForm(){

    const [isVisible, setIsVisible] = React.useState(false)
    const toggleVisibility = () => setIsVisible(!isVisible);

    return(
        <div className="wrapper">
        <Card className="card backdrop-blur">
            <h1>LogIn</h1>
            <CardBody className="content-cover">
            <form>
                <div className="email">
                <label>
                <input className='input' required
                type="email"
                placeholder="Email Address"
                /><EmailIcon className="icon"/>
                </label>
                </div>

                <div className="password">
                <label>
                <input className="input pass" required
                type={isVisible ? "text" :"password" }
                placeholder="Password"
                /><LockIcon className="icon"/>
                <button type='button' className='btn' onClick={toggleVisibility} >
                    {isVisible ? (
                <VisibilityIcon className='eye'/>):(
                    <VisibilityOffIcon/>
                )}
                </button>
                </label>
                </div>

                <div className='remember'>
                <label>
                <input type="checkbox" />Remember Me
                </label>
                <a href="#" className="forgot">Forgot Password ?</a>
                </div>
                <div>
                    <Button type="submit" className="mt-2" style={{width:"100%", fontWeight:"bolder",
                    fontSize:"18px"}} 
                    variant='ghost' color='primary'
                    >LogIn</Button>
                </div>
                <div className="remember">
                <p>Don&apos;t Have an Account?
                <a href="/signup">Register</a></p>
                </div>
            </form>
            </CardBody>
        </Card>
        </div>
    )
}