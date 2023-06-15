import React, { useState } from 'react';
import Task from './Task.tsx';

function AddNewTask() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      description: newTaskDescription,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Task Title"
        />
        <textarea
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          placeholder="Task Description"
        ></textarea>
        <button type="submit">Add New Task</button>
      </form>

      <h3>Task List</h3>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Task Description</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddNewTask;
