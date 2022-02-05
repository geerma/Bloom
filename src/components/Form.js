import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
 
import React, { useState } from 'react'
import { auth } from './Firebase';
import BlumeLogo from '../Assets/BlumeLogo.png'

import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
 } from "firebase/auth";
 
const Form = () => {
   const history = useHistory();
 
   const logout = async () => {
       await signOut(auth);
 
       history.push('/')
     };
 
   return (
 
   <div>
   <header className="formHeader">
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
 
   <div class="formHeaderboxContainer">
       <h1> Blume when the world feels like chaos</h1>
       <h2>It's a time when you can de-stress and wind down.</h2>
       </div> 
 
   </header>
       <div>
       <form className='form'>
           <p className='question'>How was your day?</p>
           <div className='howWasYourDay'>
               <input className='emotion' type = "button" value="Happy"></input>
               <input className='emotion'type = "button" value="Neutral"></input>
               <input className='emotion'type = "button" value="Sad"></input>
           </div>
           <div className='highlightBox'>
           <p className='question'>Highlights for the Day</p>
           <div className='highlightsOfYourDay'>
               <input type = "text"></input>
           </div>
           </div>
 
           <div className='betterDayBox'>
           <p className='question'>How could I have made this day better?</p>
           <div className='makeThisDayBetter'>
               <input type = "text"></input>
           </div>
           </div>
 
           <div className='tomorrowBox'>
           <p className='question'>What are you looking foward to tomorrow? </p>
           <div className='lookingFoward'>
               <input type = "text"></input>
           </div>
           </div>
    
       </form>
       {/* TODO: make save button save  */}
       <div className="logoutButtonContainer"><button className='logoutButton' onClick={logout}>SAVE</button> </div>
       <p class='logOut' onClick={logout}>LOG OUT</p>
 
       </div>
 
       </div>
 
   )
}
 
export default Form