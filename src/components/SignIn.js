// import React from "react";
import React, { useState } from 'react'
// import { auth } from '/Users/mihirseth/Desktop/Coding/Bloom/src/firebase';
import { auth } from './Firebase';

import { useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';



function SignInPage() {
    const history = useHistory();
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
                <h1 className='signUpHeading'>Sign In to Bloom :)</h1>
                <p className='signUpCaption'>Let's get you started</p>
            
                <form className='authForm'>
                    <div className='authInfo' >
                        <div>
                            <label>Email</label>
                            <input type='text' id='email' placeholder='Enter your email' onChange={e => setEmail(e.currentTarget.value)} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type='password' id='password' placeholder='Enter your password' onChange={e => setPassword(e.currentTarget.value)} />
                        </div>
                    </div>

                    <div className="submitButtonContainer"><button type="submit" className='submitButton'  onClick={signIn}>Submit</button> </div>

                </form>
            </div>

        </div>

  );
}
export default SignInPage;