import React from 'react';
import Navbar from '../components/Navbar';
import AddNewTask from '../components/AddNewTask';

function NewTask() {
  return (
    <>
      <Navbar />
      <h1>New Task</h1>
      <AddNewTask />
    </>
  );
}

export default NewTask;
