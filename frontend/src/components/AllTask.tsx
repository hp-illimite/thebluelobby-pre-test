import React from 'react';
import { useState } from 'react';

function AllTask() {
  const [taskList, setTaskList] = useState([
    {
      name: 'Task Name 1',
      description: 'Lorem ipsum...',
    },
  ]);

  const [isChecked, setIsChecked] = useState(false);
  const [completedTask, setCompletedTasks] = useState([]);

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);

    if (checked) {
      setCompletedTasks([
        completedTask,
        {
          name: 'Completed Task',
          description: 'desc here',
        },
        {
          name: 'Completed Task 2',
          description: 'Completed desc here',
        },
      ]);

      setTaskList(taskList.filter((task) => task.name !== completedTask.name));
    }
  };

  const taskIsCompleted = () => {
    if (completedTask.length > 0) {
      return (
        <div className="task-table completed-list table-responisve">
          <h3>Completed Task</h3>
          <table>
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Task Description</th>
              </tr>
            </thead>
            <tbody>
              {completedTask.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  return (
    <>
      <div className="task-table all-list table-responisve">
        <table>
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Task Description</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task, index) => (
              <tr key={index}>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {taskIsCompleted()}
    </>
  );
}

export default AllTask;
