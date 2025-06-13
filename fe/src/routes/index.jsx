// src/routes/index.js
import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../pages/Dashboard';
import MainLayout from '../components/MainLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // this wraps all routes with Navbar
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      // Add more nested routes here as needed
    ],
  },
  {
    path: '/login',
    element: <Login />, // no Navbar here
  },
]);

export default router;
