import { useState } from 'react'

const AddTask = ({onAdd}) => {
    
    const [text, setText] = useState ('')
    const [date, setDate] = useState ('')
    const [time, setTime] = useState ('')
    
    const onSubmit = (e) => {
        e.preventDefault(); /*Prevent refresh*/

        if(!text) {
            alert('Please add text')
            return
        }

        onAdd({text, date, time})

        setText('')
        setDate('')
        setTime('')

    }

    

    return (
    
        <div>

            <form className='addTaskForm' onSubmit ={onSubmit}>

                <div className='inputBoxDiv'>
                    <div className='breaking'>
                        <p className='question'>Task</p>
                        <div>
                            <input className='whatTask' type = "text" placeholder="Task" value={text} onChange ={(e) => setText(e.target.value)} ></input>
                        </div>
                    </div>

                    <div className='breaking'>
                    <p className='question'>Which day?</p>
                        <div className='question'> 
                            <input className='whatDay' type = "text" placeholder="Date" value={date} onChange ={(e) => setDate(e.target.value)}></input>
                        </div>
                    </div>

                    <div className='breaking'>
                        <p className='question'>What Time?</p>
                        <div > 
                            <input className='whatTime' type = "text" placeholder="Time" value={time} onChange ={(e) => setTime(e.target.value)}></input>
                        </div>
                    </div>
                </div>

                <div className='saveButtonDiv'>
                    <div><input className="saveTaskButtonContainer" className='saveTaskButton' type = "submit" value ="SAVE TASK" /></div>
                </div>
                
            </form>
        
        </div>

        
    )
}

export default AddTask