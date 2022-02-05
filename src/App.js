// import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>Welcome to Bloom. </p>
        <p> Bloom when the world feels like chaos</p>

        </header>

        <Form />
        <Tasks />
        
    </div>
  );
}

export default App;
