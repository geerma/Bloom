import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom';
 
import React, { useState } from 'react'
import { auth } from './Firebase';
import BlumeLogo from '../Assets/BlumeLogo.png'
import {signOut} from "firebase/auth";

const Journal = () => {

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
           <li><a><Link to="/contactus">Contact Us</Link></a></li>
            <li><a><Link to="/todolist">To Do List</Link></a></li>
            <li><a><Link to="/journal">Journal Entries</Link></a></li>
            <li><a><Link to="/home">Journal Form</Link></a></li>
            <li><a><Link onClick={logout}>Log Out</Link></a></li>

 
           </ul>
           </div>
       </div>
 
   <div class="journalHeaderboxContainer">
       <h1 className=''> Your Journal Database</h1>
       <h2>View your journal by date</h2>
       </div> 
    
       <div className='todayDate'>
               <p className='todayDateTitle'>Today's Date</p>
        </div>

       <div className='allDateContainer'>
           <div className='theDate'>
            <form action="/action_page.php">
                <input type="date" id="currentDate" name="currentDate"></input>
            </form>
            </div>           
        </div>
 
   </header>


   <div class='journalContainer'>
            <div class='highlightBoxJournal'>
                <p className='question'>How was your day?</p>
                <p class='answer'>I had an amazing day</p>
            </div>

           <div className='highlightBoxJournal'>
                <p className='question'>Highlights for the Day</p>
                <p class='answer'>Learning new skills, solving exciting problems, and creating a great prototype at the hackathon</p>

           </div>
 
           <div className='betterDayBoxJournal'>
            <p className='question'>How could I have made this day better?</p>
            <p class='answer'>Relaxing more</p>
           </div>
 
           <div className='tomorrowBoxJournal'>
                <p className='question'>What are you looking foward to tomorrow? </p>
                <p class='answer'>Eating good food!</p>

           </div>

   </div>
 </div>
 
   )
}
 
export default Journal