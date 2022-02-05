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

    return (
        <div>
        <Tasks tasks={tasks}/>
        </div>
    ); 
  };