import Task from './Task'
import { useState } from 'react'


const Tasks = ({tasks, onDelete}) => {

    return (

    <div className='ToDoDivContainer'>

            {tasks.map(
                (task) => (
            <Task key={
                task.id} task={task} onDelete={onDelete} />)
                )}

    </div>
    )
}

export default Tasks