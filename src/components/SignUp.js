// import React from "react";
import React, { useState } from 'react'
import { auth } from './Firebase';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

// import { auth } from "./firebase-config";

function SignUpPage() {

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    });
    // const history = useHistory();
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
        <div className="header">
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

            <div className ='lowerheader'>
                <h1 className='signUpHeading'>Sign Up to Bloom :)</h1>
                <p className='signUpCaption'>Let's get you started</p>
            
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

                    <div className="submitButtonContainer"><button id='submit' className='submitButton'  onClick={signUpFunction}>Submit</button> </div>

                </div>
            </div>
            {/* <h4> User Logged In: </h4>
             {user?.email} */}
        </div>

  );
}
export default SignUpPage;