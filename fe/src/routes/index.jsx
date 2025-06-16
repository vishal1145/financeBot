// src/routes/index.js
import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/Login';
import Dashboard from '../pages/Dashboard';
import MainLayout from '../components/MainLayout';
import ProtectedRoute from '../components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
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
