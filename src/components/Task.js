import { TiDeleteOutline } from 'react-icons/ti'

const Task = ({task, onDelete}) => {
    return (
        <div className='TodoDiv'>

            <div className = 'individualTodo'>
                <h2 className='todoTitle'>{task.text} 
                <TiDeleteOutline className='cancelTodo' style={{color: '#D23636', cursor: 'pointer'}} 
                onClick ={() => onDelete(task.id)}/> 
                </h2>
                
                <p className='todoCaption'>{task.date} at {task.time}</p>
            </div>

        </div>
        
    )
}

export default Task