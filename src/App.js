import './App.css';
import {useState} from 'react'

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import {Routes} from "./Routes.jsx";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Task for Tomorrow 1',
    },
    {
        id: 2,
        text: 'Task for Tomorrow 2',
    },
    {
        id: 3,
        text: 'Task for Tomorrow 3',
    }
])

  return (
    
    <div className="App">
      <header className="App-header">

        <div class="box">
        <h1> Bloom when the world feels like chaos</h1>
        <h2>It's a time when you can de-stress and wind down.</h2>
        <form class="loginForm">
            <div class="formGroup">
              <label>Name</label>
              <input type="text" name="name"></input>
            </div>
            <div class="formGroup">
              <label>Email</label>
              <input type="text" name="email"></input>
            </div>
        </form>
        </div>  
      </header>

    <Routes />

    </div>
    

  );
}

export default App;
