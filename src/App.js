// import logo from './logo.svg';
import './App.css';
// import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <h1> Bloom when the world feels like chaos.</h1>
      <p> Bloom when the world feels like chaos.</p>

      </header>

      <form class='form'>
            <p className='question'>How was your day?</p>
            <div className='howWasYourDay'> 
                <input className='emotion' type = "button"></input>
                <input className='emotion'type = "button"></input>
                <input className='emotion'type = "button"></input>
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
    </div>
  );
}

export default App;
