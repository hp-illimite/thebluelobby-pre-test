import React from 'react';

function Task({ task }) {
  return (
    <tr>
      <td>{task.title}</td>
      <td>{task.description}</td>
    </tr>
  );
}

export default Task;
