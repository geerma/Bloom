import React, { useState, useEffect } from 'react'
// import { SignUp } from "./Pages/SignUp";
// import { SignIn } from "./Pages/SignIn";
import { useHistory } from 'react-router-dom';
import { auth } from './Firebase';
import '../App.css';



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
                    <p className='title'>Header Logo</p>
                </div>
                <div className='navbarContainer2'>
                <ul>
                    <li><a>Contact Us</a></li>
                    <li><a>To Do List</a></li>

                </ul>
                </div>
            </div>

    <div class="box">
        <h1> Blume when the world feels like chaos</h1>
        <h2>It's a time when you can de-stress and wind down.</h2>
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
