import React from "react";

export default function Task({ data }) {

  return (

    <>
      <h1>Task Name: {data.name}</h1>
      <h2>Task description:  {data.description}</h2>
      <h3>Assigned To: {data.assigned}</h3>
      <h4>Task Due Date: {data.date}</h4>
    </>

  )

}