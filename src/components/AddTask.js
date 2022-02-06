import { useState } from 'react'
import { db, collection, getDocs, addDoc } from '../components/Firebase'

const AddTask = ({onAdd}) => {
    
    const [text, setText] = useState ('')
    const [date, setDate] = useState ('')
    const [time, setTime] = useState ('')
    
    const onSubmit = (e) => {
        /*e.preventDefault();*/ /*Prevent refresh*/

        if(!text | !date | !time) {
            alert('Please fill out all forms')
            return
        }

        onAdd({text, date, time})
        setText('')
        setDate('')
        setTime('')

        /* Old Firebase notation
        db.collection("tasks").add({
            text: text,
            date: date,
            time: time,
        })
        .then(() => {
            alert('Task has been added!')
        })
        .catch((error) => {
            alert(error.message);
        });*/

        const getList = async() => {
            const tasksCol = collection(db, 'tasks');
            const taskSnapshot = await getDocs(tasksCol);
            const taskList = taskSnapshot.docs.map(doc => doc.data());
            console.log(taskList)
          } 

        getList();

        const addTheTask = async() => {
            const addTask = await addDoc(collection(db, "tasks"), {
                text: text,
                date: date,
                time: time,
            })
        }

        addTheTask();

    };

    

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