import React, { useState } from 'react';
import Task from './Task.tsx';

function AddNewTask() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      description: newTaskDescription,
      checked: false,
    };
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setNewTaskDescription('');
  };

  const taskCheck = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, checked: !task.checked } : task
    );
    setTasks(updatedTasks);
  };

  const moveToCompleted = () => {
    const completed = tasks.filter((task) => task.checked);
    setCompletedTasks([...completedTasks, ...completed]);
    const remainingTasks = tasks.filter((task) => !task.checked);
    setTasks(remainingTasks);
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
            <Task key={task.id} task={task} onTaskCheck={taskCheck} />
          ))}
        </tbody>
      </table>

      <button onClick={moveToCompleted}>Move to Completed</button>

      <h3>Completed Tasks</h3>
      <table>
        {/* Table headers */}
        <tbody>
          {completedTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddNewTask;
