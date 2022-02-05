// import React from "react";
import React, { useState } from 'react'
import { auth } from './Firebase';
import { useHistory } from 'react-router-dom';
import BlumeLogo from '../Assets/BlumeLogo.png'

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";



function SignInPage() {

    const [user, setUser] = useState({});
    const history = useHistory();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);

        });

    
    const goBack =  () => {
            history.push('/')
          };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async() => {
        try {
            const user = await signInWithEmailAndPassword(
              auth,
              email,
              password
            );
            console.log(user);
          } catch (error) {
              console.log(error)
            if (password.length < 6){
                alert('Password should be at least 6 characters!')
            }
          }
        }
    
    return (
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

            <div className ='box'>
                <h1 className='pageHeading'>Sign In to Bloom</h1>
                <h2 className='pageCaption'>Welcome Back!</h2>
            
                <div className='authForm'>
                    <div className='authInfo' >
                        <div>
                            <label>Email</label>
                            <input type='text' id='email' placeholder='Enter your email' onChange={e => setEmail(e.currentTarget.value)} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type='password' id='password' placeholder='Enter your password' onChange={e => setPassword(e.currentTarget.value)} />
                        </div>
                    </div>

                    <div className="submitButtonContainer"><button id='submit' className='submitButton'  onClick={signIn}>SIGN IN</button> </div>
                    <p class='goBack' onClick={() => history.push('/')}>GO BACK</p>
                </div>
            </div>

        </header>

  );
}
export default SignInPage;