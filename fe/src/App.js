import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './App.css';

// Placeholder Dashboard component
const Dashboard = () => (
  <div className="dashboard">
    <h1>Dashboard</h1>
    <p>Welcome to your dashboard!</p>
  </div>
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
