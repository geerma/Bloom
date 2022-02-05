import PropTypes from 'prop-types'

const Form = () => {
    return (
        <form className ="form">
            <h1>Form Starts Here</h1>
            <div>
                <label> How are you feeling today? </label>
            <input type = "button">
            </input>
            <input type = "button">
            </input>            
            <input type = "button">
            </input>
            </div>

            <div>
            <label> Two </label>
            <input type = "text" placeholder="Type here"></input>

            <label> Three </label>
            <input type = "text" placeholder="Type here"></input>

            <label> Four </label>
            <input type = "text" placeholder="Type here"></input>
            </div>
            
        </form>
    )
}

export default Form