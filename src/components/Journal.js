import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom';
 
import React, { useState } from 'react'
import { auth } from './Firebase';
import BlumeLogo from '../Assets/BlumeLogo.png'

const Journal = () => {
 
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
            <li><a><Link to="/home">Journal</Link></a></li>
 
           </ul>
           </div>
       </div>
 
   <div class="formHeaderboxContainer">
       <h1> Your Journal Database</h1>
       <h2>View your journal by date</h2>
       </div> 
 
   </header>
       <div>
       <form className='form'>
           <div className='inlineHeader'>
           <div className='allDate'>
           <div className='todayDate'>
               <p className='todayDateTitle'>Today's Date</p>
           </div>

           <div className='theDate'>
            <form action="/action_page.php">
                <input type="date" id="currentDate" name="currentDate"></input>
            </form>
            </div>           
            </div>

           <div className='howWasDayBox'>
           <h1 className='question'>How was your day?</h1>
           <div className='howWasYourDay'>


           </div>
           </div>
           </div>
           <div className='highlightBox'>
           <p className='question'>Highlights for the Day</p>
           <div className='highlightsOfYourDay'>

           </div>
           </div>
 
           <div className='betterDayBox'>
           <p className='question'>How could I have made this day better?</p>
           <div className='makeThisDayBetter'>

           </div>
           </div>
 
           <div className='tomorrowBox'>
           <p className='question'>What are you looking foward to tomorrow? </p>
           <div className='lookingFoward'>

           </div>
           </div>
    
       </form>
 
       </div>
 
       </div>
 
   )
}
 
export default Journal