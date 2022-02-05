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
    <div class="box">
        <h1> Bloom when the world feels like chaos</h1>
        <h2>It's a time when you can de-stress and wind down.</h2>
        </div>  
    </header>
    <div className='auth'>
            {/* {authType === 'signIn' ? */}
                <div className='container'>
                    {/* <SignIn /> */}
                    <p className='authTextOptions'>New here? <span onClick={() => history.push('/signup')}>Create account.</span></p>
                </div>
                {/* : */}
                <div className='container'>
                    {/* <SignUp /> */}
                    <p className='authTextOptions'>Have an account? <span onClick={() => history.push('/signin')}>Sign In.</span></p>
                </div>
            {/* } */}
     </div>
     </div>


    )
}

export default AuthClassifierPage
