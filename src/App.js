// import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="box">
        <h1> Bloom when the world feels like chaos</h1>
        <h2>It's a time when you can de-stress and wind down.</h2>
        </div>  
      </header>
        <Form />
        <Tasks />
    </div>
  );
}

export default App;
