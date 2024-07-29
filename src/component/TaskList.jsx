import React from "react";
import { Link } from "react-router-dom";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <Link
        to="/add"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Add Task
      </Link>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="mb-2">
            <h2 className="text-xl">{task.title}</h2>
            <p>{task.description}</p>
            <Link to={`/edit/${task.id}`} className="text-blue-500">
              Edit
            </Link>
            <button
              onClick={() => deleteTask(task.id)}
              className="bg-red-500 text-white px-2 py-1 rounded ml-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
