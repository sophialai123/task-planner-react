import { useState, useEffect } from 'react';
import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {


  const storeData = localStorage.getItem('stored-tasks')

  const [tasks, setTasks] = useState((storeData ? JSON.parse(storeData) : []));


  //will redner based on tasks
  useEffect(() => {
    localStorage.setItem('stored-tasks', JSON.stringify(tasks))
  }, [tasks])


  const creatTask = task => {
    setTasks([...tasks, task]
    )
  }


  const deleteTask = index => {
    let newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)

  }

  return (
    <div className="App">
      <TaskForm addTask={creatTask} />
      <div className="taskBody">
        {tasks.map((item, index) => {
          return <Task key={index} data={item} remove={deleteTask} />
        })}
      </div>
    </div>
  );
}

export default App;
