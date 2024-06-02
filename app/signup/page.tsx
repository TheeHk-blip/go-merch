'use client'

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Card, CardBody } from "@nextui-org/card";
import { Button } from '@nextui-org/react';
import { useState } from "react";
import './signup.css';

export default function SignUpForm(){
    const [emailaddress, setEmailAddress ] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUserName] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    function ShowPassword(){

    }
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
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                /><AccountBoxIcon className="icon"/>
                </label>
                </div>

                <div className="email">
                <label>
                <input className='input' required
                type="email"
                placeholder="Email Address"
                value={emailaddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                /><EmailIcon className="icon"/>
                </label>
                </div>

                <div className="password">
                <label>
                <input className="input" required
                type="password"
                placeholder="Password"
                value={confirmpassword}
                onChange={(e) => setPassword(e.target.value)}/>
                <LockIcon className="icon"/>
                <Button className='btn' variant="light" onClick={ShowPassword}>
                <VisibilityIcon className='eye'/>
                </Button>
                </label>
                </div>

                <div className="password">
                <label>
                <input className="input" required
                type="password"
                placeholder="Confirm Password"
                value={password}
                onChange={(e) => setConfirmPassword(e.target.value)}
                id="myInput"/>
                <LockIcon className="icon"/>
                <Button className='btn' variant="light" onClick={ShowPassword}>
                <VisibilityIcon className='eye'/>
                </Button>
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