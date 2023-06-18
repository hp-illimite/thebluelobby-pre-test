import React from 'react';

function Task({
  task,
  onTaskCheck,
  onMoveToTasks,
  isCompletedTask,
  onDeleteTask,
}) {
  const checkboxChange = () => {
    onTaskCheck(task.id);
  };

  const moveToTasks = () => {
    onMoveToTasks(task.id);
  };

  const deleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>
        <input
          type="checkbox"
          checked={task.checked}
          onChange={checkboxChange}
        />
      </td>
      {isCompletedTask && (
        <td>
          <button onClick={moveToTasks}>Move to Tasks</button>
        </td>
      )}
      <td>
        <button onClick={deleteTask}>Delete</button>
      </td>
    </tr>
  );
}

export default Task;
