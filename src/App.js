import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Bloom. </p>
        <p> Bloom when the world feels like chaos.</p>
        <Form />
        <Tasks />
      </header>

    </div>
  );
}

export default App;
