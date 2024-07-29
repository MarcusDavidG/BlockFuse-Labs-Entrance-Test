import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from "./component/TaskList";
import AddTask from "./component/AddTask";
import EditTask from "./component/EditTask";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<TaskList tasks={tasks} deleteTask={deleteTask} />}
        />
        <Route path="/add" element={<AddTask addTask={addTask} />} />
        <Route
          path="/edit/:id"
          element={<EditTask tasks={tasks} updateTask={updateTask} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
