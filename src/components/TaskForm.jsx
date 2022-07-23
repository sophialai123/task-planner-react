import { useState } from "react";


export default function TaskForm({ addTask }) {
  const [inputValue, setInputValue] = useState({
    name: " ",
    description: " ",
    assigned: " ",
    date: " "
  });


  function handleSubmit() {

    addTask(inputValue)

  }

  const handleFormChange = event => {

    const propChanging = event.target.id; //object key
    const valueChanging = event.target.value;

    setInputValue({
      ...inputValue,
      [propChanging]: valueChanging   //object acess the key
    })
  }


  return (
    <div className="form">
      <h1>Task Planner</h1>
      <label>Task Name: </label>
      <input id="name" type='text' value={inputValue.name} onChange={handleFormChange} /> <br />
      <label>Task Description: </label>
      <input id="description" type='text' value={inputValue.description} onChange={handleFormChange} /><br />
      <label>Task Assigned: </label>
      <input id="assigned" type='text' value={inputValue.assigned} onChange={handleFormChange} /><br />
      <label>Task Due Date: </label>
      <input id="date" type='date' value={inputValue.date} onChange={handleFormChange} /><br />
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  )

}