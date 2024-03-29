import React, { useState, useEffect } from 'react'
// import { SignUp } from "./Pages/SignUp";
// import { SignIn } from "./Pages/SignIn";
import { useHistory } from 'react-router-dom';
import { auth } from './Firebase';
import '../App.css';
import BlumeLogo from '../Assets/BlumeLogo.png'



function AuthClassifierPage() {
    const history = useHistory();
    const [authType, setAuthType] = useState('signIn');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) history.push('/home')
        })
    }, [])

    return (


    <div>
    <header className="App-header">

        <div className='navbar'>
            <div className='navbarContainer1'>
                <img className='logo-image' src={BlumeLogo} alt="blume.clarity" width="150px" height="35px"></img>
            </div>

            <div className='navbarContainer2'>
            <ul>
                <li><a>Contact Us</a></li>
                <li><a>To Do List</a></li>

            </ul>
            </div>
        </div>

        <div class="box">
            <h1 className='pageHeading'> Blume when the world feels like chaos</h1>
            <h2 className='pageCaption'>It's a time when you can de-stress and wind down.</h2>
        </div>  

        <hr class="solid"></hr>
        
        <div className='auth'>

                <div className='container'>
                    <p className='authTextOptionsNewHere'>New here? <span onClick={() => history.push('/signup')}>Create account.</span></p>
                </div>

                <div className='container'>
                    <p className='authTextOptionsSignIn'>Have an account? <span onClick={() => history.push('/signin')}>Sign In.</span></p>
                </div>

        </div>
    </header>

     </div>


    )
}

export default AuthClassifierPage
