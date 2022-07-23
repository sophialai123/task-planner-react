import React from "react";

export default function Task({ data, remove, index }) {

  return (
    <div className="taskCard">
      <h3>Task Name: {data.name}</h3>
      <h3>Task description:  {data.description}</h3>
      <h3>Assigned To: {data.assigned}</h3>
      <h4>Task Due Date: {data.date}</h4>
      <button className="deletBtn" onClick={() => remove(index)}>Delete</button>
    </div>

  )

}