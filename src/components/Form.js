import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';

import React, { useState } from 'react'
import { auth } from './Firebase';
import BlumeLogo from '../Assets/BlumeLogo.png'
import { db } from './FirebaseJournal';

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

    
    const [emotion, setEmotion] = useState("");
    const [highlight, setHighlight] = useState("");
    const [makeBetter, setMakeBetter] = useState("");
    const [lookForward, setLookForward] = useState("");

    const handleSubmit =(e) =>{
        e.preventDefault();

        db.collections('Journal').add({
            emotion: emotion,
            highlight: highlight,
            makeBetter: makeBetter,
            lookForward: lookForward,
        })

        .then(() => {
            alert('Message has been submitted :)');
        })

        .catch((error) => {
            alert(error.message); 
        });

        setEmotion("");
        setHighlight("");
        setMakeBetter("");
        setLookForward("");
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
                <li><a>Todo List</a></li>
                <li><a>Journal</a></li>
            </ul>
            </div>
        </div>

        <div class="box">
            <h1> Blume when the world feels like chaos</h1>
            <h2>It's a time when you can de-stress and wind down.</h2>
        </div>  

    </header>

        <div>
            <form className='form' onSubmit={handleSubmit}>
                <p className='question'>How was your day?</p>
                
                <div className='howWasYourDay'> 
                    <input className='emotion' type = "button" value="Happy" value = {emotion} onChange = {(e) => setEmotion(e.target.value) } ></input>
                    <input className='emotion'type = "button" value="Neutral" value = {emotion} onChange = {(e) => setEmotion(e.target.value) }></input>
                    <input className='emotion'type = "button" value="Sad" value = {emotion} onChange = {(e) => setEmotion(e.target.value) }></input>
                </div>

                <p className='question'>Highlights for the Day</p>
                <div className='highlightsOfYourDay'> 
                    
                    <input type = "text" value = {highlight} onChange = {(e) => setHighlight(e.target.value) } ></input>
                </div>

                <p className='question'>How could I have made this day better?</p>
                <div className='makeThisDayBetter'> 
                    <input type = "text" value = {makeBetter} onChange = {(e) => setMakeBetter(e.target.value) }></input>
                </div>

                <p className='question'>What are you looking foward to tomorrow? </p>
                <div className='lookingFoward'> 
                    <input type = "text" value = {lookForward} onChange = {(e) => setLookForward(e.target.value) }></input>
                </div>
        
            </form>
            
            <div className="logoutButtonContainer"><button className='logoutButton' onClick={logout}>SAVE</button> </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            

        </div>

        </div>

    )
}

export default Form