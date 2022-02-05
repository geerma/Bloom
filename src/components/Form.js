import PropTypes from 'prop-types'

const Form = () => {
    return (

        <form class='form'>
            <p className='question'>How was your day?</p>
            <div className='howWasYourDay'> 
                <input className='emotion' type = "button" value="Happy"></input>
                <input className='emotion'type = "button" value="Neutral"></input>
                <input className='emotion'type = "button" value="Sad"></input>
            </div>

            <p className='question'>Highlights for the Day</p>
            <div className='highlightsOfYourDay'> 
                <input type = "text"></input>
            </div>

            <p className='question'>How could I have made this day better?</p>
            <div className='makeThisDayBetter'> 
                <input type = "text"></input>
            </div>

            <p className='question'>What are you looking foward to tomorrow? </p>
            <div className='lookingFoward'> 
                <input type = "text"></input>
            </div>
      
        </form>
    )
}

export default Form