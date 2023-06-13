// import { useState, useEffect } from 'react';
// import { getHelloWorld } from './api';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar.tsx';
import AllTask from './components/AllTask.tsx';

function App() {
  return (
    <>
      <Navbar />
      <h1>Task Management List</h1>
      <AllTask />
    </>
  );
}

export default App;
