
import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  let [todoList, setTodoList] = useState([]);

  let [newTask, setNewTask] = useState("");

  let handelChange = (event) => {
    setNewTask(event.target.value);
  };

  let addTask = () => {
    let task ={
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };

      setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  let deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));  
  };

  let completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return {...task, completed: true};
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">

      <div className="addTask">
        <input onChange={handelChange} />
        <button onClick={addTask}> Add Task </button>

      </div>

      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
            taskName={task.taskName}
            id={task.id}
            completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
          );
        })}
        </div>
    </div>
  );
};

export default App;
