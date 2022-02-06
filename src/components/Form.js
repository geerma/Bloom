import PropTypes from 'prop-types'
import { useHistory, Link } from 'react-router-dom';
 
import React, { useState } from 'react'
import { auth } from './Firebase';
import BlumeLogo from '../Assets/BlumeLogo.png'
import moment from "moment";
import { db, collection, getDocs, addDoc } from '../components/Firebase'

import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   onAuthStateChanged,
   signOut,
 } from "firebase/auth";

//  to get the date for the date function
export function getCurrentDate(separator=''){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

const Form = () => {
   const history = useHistory();
 
   const logout = async () => {
       await signOut(auth);
 
       history.push('/')
     };
 
     const [currentDay, setCurrentDay] = useState ('')
     const [howWasDay, setHowWasDay] = useState ('')
     const [highlightDay, setHighlightDay] = useState ('')
     const [makeDayBetter, setMakeDayBetter] = useState ('')
     const [lookForward, setLookForward] = useState ('')

    const submitJournal = (e) => {
        e.preventDefault(); 
        console.log('Submitted')

        if(!currentDay | !howWasDay | !highlightDay | makeDayBetter | lookForward) {
            alert('Please fill out all forms')
            return
        }

        setCurrentDay('')
        setHowWasDay('')
        setHighlightDay('')
        setMakeDayBetter('')
        setLookForward('')

        const addTheJournal = async() => {
                await addDoc(collection(db, "Journal"), {
                currentDay: currentDay,
                howWasDay: howWasDay,
                highlightDay: highlightDay,
                makeDayBetter: makeDayBetter,
                lookForward: lookForward,
            })
        }

        addTheJournal();
    }

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
 
           </ul>
           </div>
       </div>
 
   <div class="formHeaderboxContainer">
       <h1> Blume when the world feels like chaos</h1>
       <h2>It's a time when you can de-stress and wind down.</h2>
    </div> 
 
   </header>
       <div class='main'>
       <form className='form' onSubmit ={submitJournal}>
           <div className='inlineHeader'>
           <div className='allDate'>
           <div className='todayDate'>
               <p className='question'>Today's Date</p>
           </div>

           <div className='theDate'>
            <form action="/action_page.php">
                <input type="date" id="currentDate" name="currentDate" value = {currentDay} onChange ={(e) => setCurrentDay(e.target.value)}></input>
            </form>
            </div>           
            </div>
           <div className='howWasDayBox'>
           <h1 className='question'>How was your day?</h1>
           <div className='howWasYourDay'>
               <input type="text" value = {howWasDay} onChange ={(e) => setHowWasDay(e.target.value)} ></input>
               {/* <input className='emotion' type = "button" value="Happy"></input>
               <input className='emotion'type = "button" value="Neutral"></input>
               <input className='emotion'type = "button" value="Sad"></input> */}
           </div>
           </div>
           </div>
           <div className='highlightBox'>

           <p className='question'>Highlights for the Day</p>
           <div className='highlightsOfYourDay'>
               <input type = "text" value = {highlightDay} onChange ={(e) => setHighlightDay(e.target.value)}></input>

           </div>
           </div>
 
           <div className='betterDayBox'>
           <p className='question'>How could I have made this day better?</p>
           <div className='makeThisDayBetter'>
               <input type = "text" value = {makeDayBetter} onChange ={(e) => setMakeDayBetter(e.target.value)}></input>
           </div>
           </div>
 
           <div className='tomorrowBox'>
           <p className='question'>What are you looking foward to tomorrow? </p>
           <div className='lookingFoward'>
               <input type = "text" value = {lookForward} onChange ={(e) => setLookForward(e.target.value)}></input>
           </div>
           </div>
        </form> 
        
       {/* TODO: make save button save  */}
       <div className="logoutButtonContainer">
           <button className='logoutButton' onClick={submitJournal}>SAVE</button> 
        </div>
       <p class='logOut' onClick={logout}>LOG OUT</p>
 
       </div>

       
       </div>
 
   )
}
 
export default Form