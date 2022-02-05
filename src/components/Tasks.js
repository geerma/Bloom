import Task from './Task'
import { useState } from 'react'
import BlumeLogo from '../Assets/BlumeLogo.png'

const Tasks = ({tasks, onDelete}) => {

    return (

        

        <div>


        {//Placeholder header}
}
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

    <div class="taskHeaderboxContainer">
        <h1>To-Do List for Mental Clarity</h1>
        <h2>Today's Date:</h2>
        </div>  
    </header>

            {tasks.map(
                (task) => (
            <Task key={
                task.id} task={task} onDelete={onDelete} />)
                )}
        </div>
    )
}

export default Tasks