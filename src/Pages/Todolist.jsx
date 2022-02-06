import React from "react";
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
import { useState } from 'react'
import BlumeLogo from '../Assets/BlumeLogo.png'

import { useHistory } from 'react-router-dom';
import { auth } from '../components/Firebase';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

export const Todolist = () => {
    
    //Global State
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Getting Started with Blume',
            date: 'Due Today',
            time: 'Anytime',
        },
        
    ])

    const history = useHistory();

    const logout = async () => {
        await signOut(auth);
  
        history.push('/')
      };

    const addTask = (task) => {
        console.log(task)
        const id = Math.floor(Math.random() * 30000) + 1
        console.log(id)

        const newTask = {id, ...task} 

        setTasks([...tasks, newTask])
    }

    const deleteTask = (id) => {
        console.log('Delete Task ID:', id)
        setTasks(tasks.filter((task) => task.id !== id )) 
    }

    const saveTask = async() => {

    }

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

    return (
    <div>

    <header className="taskHeader">
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

    <div className="taskHeaderboxContainer">
        <h1>To-Do List for Mental Clarity</h1>
        <h2>Today is {today}</h2>
    </div>  
    </header>

        {tasks.length>0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : ('No Tasks')}

        <AddTask onAdd={addTask}/>

        {/*<div className="saveTaskButtonContainer"><button className='saveTaskButton' onClick={saveTask}>Save Task</button> </div>*/}
        <p class='logOut' onClick={logout}>LOG OUT</p>

    </div>
    ); 
  };