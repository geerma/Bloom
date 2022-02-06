import cancelLogo from '../Assets/cancel.png'

const Task = ({task, onDelete}) => {
    return (
        <div className='TodoDiv'>

            <div className = 'individualTodo'>
                <h2 className='todoTitle'>{task.text} 
                <img className='cancelTodo' src={cancelLogo} alt="cancel_svg" width="30px" height="30px" 
                onClick ={() => onDelete(task.id)}/> 
                </h2>
                
                <p className='todoCaption'>{task.date} at {task.time}</p>
            </div>

        </div>
        
    )
}

export default Task