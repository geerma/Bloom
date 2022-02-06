import React, { useEffect, useState } from "react";
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
import BlumeLogo from '../Assets/BlumeLogo.png'

import { useHistory, Link } from 'react-router-dom';
import { auth } from '../components/Firebase';
import { db, collection, getDocs, addDoc, deleteField } from '../components/Firebase'


import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";

export const Todolist = () => {
    



    /*const getList = async() => {
        const tasksCol = collection(db, 'tasks');
        const taskSnapshot = await getDocs(tasksCol);
        const taskList = taskSnapshot.docs.map(doc => doc.data());
        console.log(taskList)
      } */

    /*getList();*/

    //Global State
    const [tasks, setTasks] = useState([
        {
            /*id: 0,
            text: '',
            date: '',
            time: '',*/
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

    useEffect(() => { 
        const getTasks = async () => {
            const taskFromServer = await fetchTasks()
            setTasks(taskFromServer)
        }
        getTasks()
    }, [])

    //Fetch Tasks
    const fetchTasks = async () => {
        const tasksCol = collection(db, 'tasks');
        const taskSnapshot = await getDocs(tasksCol);
        const taskList = taskSnapshot.docs.map(doc => doc.data());
        console.log(taskList)
        return taskList
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
            <li><a><Link to="/contactus">Contact Us</Link></a></li>
            <li><a><Link to="/todolist">To Do List</Link></a></li>
            <li><a><Link to="/journal">Journal Entries</Link></a></li>
            <li><a><Link to="/home">Journal Form</Link></a></li>
            <li><a><Link onClick={logout}>Log Out</Link></a></li>


            </ul>
            </div>
        </div>

    <div className="taskHeaderboxContainer">
        <h1>To-Do List for Mental Clarity</h1>
        <h2>Today is {today}</h2>
    </div>  
    </header>
        <AddTask onAdd={addTask}/>

        <Tasks tasks={tasks} onDelete={deleteTask}/>

        {/*<div className="saveTaskButtonContainer"><button className='saveTaskButton' onClick={saveTask}>Save Task</button> </div>*/}
        {/* <p class='logOut' onClick={logout}>LOG OUT</p> */}
        <br></br>



    </div>
    ); 
  };