import { useState } from 'react'

const AddTask = ({onAdd}) => {
    
    const [text, setText] = useState ('')
    const [day, setDay] = useState ('')
    const [time, setTime] = useState ('')
    
    const onSubmit = (e) => {
        e.preventDefault(); /*Prevent refresh*/

        if(!text) {
            alert('Please add text')
            return
        }

        onAdd({text, day, time})

        setText('')
        setDay('')
        setTime('')
    }

    return (

    <form className='addTaskForm' onSubmit ={onSubmit}>
        <p className='question'>Task</p>
        <div className='whatTask'> 
        <input type = "text" placeholder="Task" value={text} onChange ={(e) => setText(e.target.value)} ></input>
        </div>

        <p className='question'>Which Day?</p>
        <div className='whatDay'> 
        <input type = "text" placeholder="Date" value={day} onChange ={(e) => setDay(e.target.value)}></input>
        </div>

        <p className='question'>What Time?</p>
        <div className='whatWhat'> 
        <input type = "text" placeholder="Time" value={time} onChange ={(e) => setTime(e.target.value)}></input>
        </div>

        <div className="saveTaskButtonContainer"><input className='saveTaskButton' type = "submit" value ="Save Task" /></div>
    </form>
    )
}

export default AddTask