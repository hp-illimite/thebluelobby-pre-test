import React from 'react';
import Navbar from '../components/Navbar';
import AllTask from '../components/AllTask';

function AllTaskPage() {
  return (
    <>
      <Navbar />
      <h1>All Task List</h1>
      <AllTask />
    </>
  );
}

export default AllTaskPage;
