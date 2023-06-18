import React, { useState } from 'react';
import Task from './Task.tsx';
import { v4 as uuidv4 } from 'uuid';

function AddNewTask() {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
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

  const moveToTasks = (taskId) => {
    const task = completedTasks.find((task) => task.id === taskId);
    const updatedCompletedTasks = completedTasks.filter(
      (task) => task.id !== taskId
    );
    setCompletedTasks(updatedCompletedTasks);
    setTasks([...tasks, { ...task, checked: false }]);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    const updatedCompletedTasks = completedTasks.filter(
      (task) => task.id !== taskId
    );

    setTasks(updatedTasks);
    setCompletedTasks(updatedCompletedTasks);
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

      <h3>Pending Task List</h3>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Task Description</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onTaskCheck={taskCheck}
              onDeleteTask={deleteTask}
            />
          ))}
        </tbody>
      </table>

      <button onClick={moveToCompleted}>Move to Completed</button>

      <h3>Completed Tasks</h3>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Task Description</th>
            {/* <th>Complete</th> */}
          </tr>
        </thead>
        <tbody>
          {completedTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onMoveToTasks={moveToTasks}
              isCompletedTask={true}
              onDeleteTask={deleteTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AddNewTask;
