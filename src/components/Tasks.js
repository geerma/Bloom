import Task from './Task'
import { useState } from 'react'

const tasks = [
    {
        id: 1,
        text: 'Task for Tomorrow 1',
        
    },
    {
        id: 2,
        text: 'Task for Tomorrow 2',
    },
    {
        id: 3,
        text: 'Task for Tomorrow 3',
    }

]


const Tasks = () => {
    return (
        <>
            {tasks.map((task) => (<h3>{task.text}</h3>)
            )}
        </>
    )
}

export default Tasks