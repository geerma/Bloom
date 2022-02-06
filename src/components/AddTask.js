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
    
        <div>
            <form className='addTaskForm' onSubmit ={onSubmit}>
            <div className='breaking'>
                <p className='question'>Task</p>
                <div className='whatTask'>
                    <input type = "text" placeholder="Task" value={text} onChange ={(e) => setText(e.target.value)} ></input>
                </div>
            </div>

            <div className='breaking'>
                <p className='question'>Which Day?</p>
                <div className='whatDay'> 
                    <input type = "text" placeholder="Date" value={day} onChange ={(e) => setDay(e.target.value)}></input>
                </div>
            </div>

            <div className=''>
                <p className='question'>What Time?</p>
                <div className='whatTime'> 
                    <input type = "text" placeholder="Time" value={time} onChange ={(e) => setTime(e.target.value)}></input>
                </div>
            </div>


            <div><input className="saveTaskButtonContainer" className='saveTaskButton' type = "submit" value ="Save Task" /></div>
        </form>
        
        </div>

        
    )
}

export default AddTask