import { useState } from 'react';
import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {

  const [tasks, setTasks] = useState([]);

  const creatTask = task => {
    setTasks([...tasks, task]
    )
  }


  const task = {
    name: 'Clean the room',
    description: 'Its gettting dirty',
    assigned: "Steven",
    date: "today"
  }
  return (
    <div className="App">
      <header className="App-header">
        <TaskForm />
        <Task data={task} />

      </header>
    </div>
  );
}

export default App;
