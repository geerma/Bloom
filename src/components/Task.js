import { TiDeleteOutline } from 'react-icons/ti'

const Task = ({task, onDelete}) => {
    return (
        <div className = 'task'>
            <h2>{task.text} 
            <TiDeleteOutline style={{color: 'red', cursor: 'pointer'}} 
            onClick ={() => onDelete(task.id)}/> 
            </h2>
            
            <p>{task.date} at {task.time}</p>
        </div>
    )
}

export default Task