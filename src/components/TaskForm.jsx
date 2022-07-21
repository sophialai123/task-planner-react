import React, { useState } from "react";
import Task from "./Task";

export default function TaskForm() {


  const [value, setValue] = useState({
    name: "Task Name",
    description: "Task Description",
    assigned: "assigned",
    date: "Today"
  });

  const handleSubmit = (e) => {

    console.log(e)



  }

  return (
    <div>

      <label>Task Name</label>
      <input type='text' /> <br />

      <label>Task Description</label>
      <input type='text' /><br />

      <label>Task Assigned</label>
      <input type='text' /><br />
      <label>Task Due Date</label>
      <input type='text' /><br />

      <button onClick={handleSubmit}>
        Submit
      </button>

    </div>
  )

}