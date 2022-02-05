import React from "react";
import Tasks from '../components/Tasks'
import { useState } from 'react'

export const Todolist = () => {
    
    //Global State
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Task 1',
            date: 'Feb 1',
            time: '4:00',
        },
        {
            id: 2,
            text: 'Task 2',
            date: 'Feb 2',
            time: '6:00',
        },
        {
            id: 3,
            text: 'Task 3',
            date: 'Feb 3',
            time: '10:00',
        }
    ])

    const deleteTask = (id) => {
        console.log('Delete Task ID:', id)
    }

    return (
        <div>
        <Tasks tasks={tasks} onDelete={deleteTask}/>

        <p className='question'>Task</p>
        <div className='whatTask'> 
        <input type = "text" placeholder="Task"></input>
        </div>

        <p className='question'>Which Day?</p>
        <div className='whatDay'> 
        <input type = "text" placeholder="Date"></input>
        </div>

        <p className='question'>What Time?</p>
        <div className='whatWhat'> 
        <input type = "text" placeholder="Time"></input>
        </div>

        </div>
    ); 
  };