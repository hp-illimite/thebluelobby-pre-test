import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import AllTaskPage from './pages/AllTaskPage.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/view-all-task',
    element: <AllTaskPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
