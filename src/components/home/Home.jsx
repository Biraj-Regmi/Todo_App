import React, { useState, useEffect } from "react";
import Task from "../task/Task";
function Home() {

  const intitalArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")):[];

  const [tasks, setTasks] = useState(intitalArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title);
  console.log(description);
  const submitHandler = (e) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        title,
        description,
      },
    ]);
    setTitle("");
    setDescription("")
  };
  console.log(tasks);
  const deleteTask = (index) => {
    const filteredArray = tasks.filter((val, i) => {
      return i+1 !== index;
    });
    console.log(filteredArray);
    setTasks(filteredArray)
  };
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }, [tasks])
  

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit">Add Task</button>
      </form>

      {tasks.map((item, index) => (
        <Task
          key={index}
          title={item.title}
          description={item.description}
          index={index+1}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}
export default Home;

// import React, { useEffect, useState } from 'react'

// const Home = () => {
// const [todo, setTodo] = useState([]);
// const [item, setItem] = useState("");

// const changeEventHandler =(e)=>{
// setItem(e.target.value);
// }

// const addData = (e) =>{
// setTodo([...todo, item]);
// setItem("");
// }
// console.log(todo);

// return (
// <div>
// <input onChange={changeEventHandler} type="text" value={item}/>
// <button onClick={addData}>Add</button>

// {
// todo.map((item)=>{
// return(
// <li>{item}</li>
// )
// })
// }

// </div>
// )
// }

// export default Home
