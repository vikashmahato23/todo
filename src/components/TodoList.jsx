import { useEffect, useMemo, useState } from "react";
import { AddTaskForm } from "./Addfrom";

export const ToDoList = ({light}) => {
  const [tasks, setTasks] = useState([

  ]);

  const [complete,setComplet]=useState([])
  const [dec,setDec] =useState(false)
  const addTask = (text) => setTasks([...tasks, { text,isCompleted:false }]);

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
    
  };

  
  
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      {/* <AddTaskForm addTask={addTask} /> */}
      <div style={{ marginBottom: "10px" }}>
        <AddTaskForm addTask={addTask} />
      </div>
      <div className="list">
        {tasks.map((task, index) => (
          <div className="todo" key={index}>
            <span>
              <input
                type="checkbox"
                value={dec}
                onChange={() => {
                  toggleTask(index);
                }}
              />
            </span>
            <span
              className={
                task.isCompleted ? "todo-text todo-completed" : "todo-text"
              }
            >
              {task.text}
            </span>
            <button onClick={() => removeTask(index)}>
              <img
                src="https://img.icons8.com/color/1x/delete-forever.png"
                alt=""
              />
            </button>
          </div>
        ))}
      </div>
       <div><h4 style={{color:`${light?"black":"white"}`}}>CompletTasks</h4></div>
      <div className="list" style={{marginTop:"20px"}}>
      
        {tasks
          .filter((data) => data.isCompleted === true)
          .map((task, index) => (
            <div className="todo" key={index}>
              <span
                className={
                  task.isCompleted ? "todo-text todo-completed" : "todo-text"
                }
              >
                {task.text}
              </span>
              {/* <button onClick={() => removeTask(index)}>
                <img
                  src="https://img.icons8.com/color/1x/delete-forever.png"
                  alt=""
                />
              </button> */}
            </div>
          ))}
      </div>
    </div>
  );
};
