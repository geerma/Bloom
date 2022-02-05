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

        <p>Welcome to Bloom. </p>
        <p> Bloom when the world feels like chaos</p>

        </header>

        <Routes />

    </div>
    

  );
}

export default App;
