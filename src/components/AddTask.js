const AddTask = () => {
    return (
    <form className='addTaskForm'>
        <p className='question'>Task</p>
        <div className='whatTask'> 
        <input type = "text" placeholder="Task"></input>
        </div>

        <p className='question'>Which Day?</p>
        <div className='whatDay'> 
        <input type = "text" placeholder="Date"></input>
        </div>

        <p className='question'>What Time?</p>
        <div className='whatWhat'> 
        <input type = "text" placeholder="Time"></input>
        </div>
    </form>
    )
}

export default AddTask