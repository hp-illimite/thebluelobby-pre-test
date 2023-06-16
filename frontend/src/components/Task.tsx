import React from 'react';

function Task({ task, onTaskCheck }) {
  const checkboxChange = () => {
    onTaskCheck(task.id);
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
    </tr>
  );
}

export default Task;
