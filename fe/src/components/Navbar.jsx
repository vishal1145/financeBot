import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom'; // use NavLink instead of Link

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-medium'
      : 'text-gray-500 hover:text-blue-600';
const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <div className="bg-gray-100">
      <nav className="bg-white shadow flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-4">
          <span className="font-bold text-xl text-blue-600">Sigma Life</span>
          <div className="hidden md:flex space-x-6 ml-8">
            <NavLink to="/" className={navLinkClass}>Dashboard</NavLink>
            <NavLink to="/users" className={navLinkClass}>Users</NavLink>
            <NavLink to="/devices" className={navLinkClass}>Devices</NavLink>
            <NavLink to="/analytics" className={navLinkClass}>Analytics</NavLink>
            <NavLink to="/insights" className={navLinkClass}>Insights</NavLink>
            <NavLink to="/settings" className={navLinkClass}>Settings</NavLink>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search..." className="border rounded px-2 py-1 text-sm" />
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="h-8 w-8 rounded-full" />
          <button
            onClick={handleLogout}
            className="flex items-center px-2 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
