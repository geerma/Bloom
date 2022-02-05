// import React from "react";
import React, { useState } from 'react'
import { auth } from './Firebase';
import BlumeLogo from '../Assets/BlumeLogo.png'

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

import { useHistory } from 'react-router-dom';

function SignUpPage() {

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    });
    const history = useHistory();

    const goBack =  () => {
        history.push('/')
      };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUpFunction = async() => {
        try {
            const user = await createUserWithEmailAndPassword(
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
        <header className="header">
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

            <div className ='App-header'>
                <h1>Sign Up to Bloom :)</h1>
                <p id ="h2-padding">Let's get you started</p>
            
                <div className='authForm'>
                    <div className='authInfo' >
                        <div>
                            <label>Email</label>
                            <input type='email' id='email' value={email} placeholder='Enter your email' onChange={e => setEmail(e.currentTarget.value)} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type='password' id='password' value={password} placeholder='Enter your password' onChange={e => setPassword(e.currentTarget.value)} />
                        </div>
                    </div>

                    <div className="submitButtonContainer"><button id='submit' className='submitButton'  onClick={signUpFunction}>SUBMIT</button> </div>
                    <p class='goBack' onClick={() => history.push('/')}>GO BACK</p>

                </div>
            </div>
            {/* <h4> User Logged In: </h4>
             {user?.email} */}
        </header>

  );
}
export default SignUpPage;