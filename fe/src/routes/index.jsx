import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/login';
import Dashboard from '../pages/dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
