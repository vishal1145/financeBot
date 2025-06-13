import React from 'react';
import { NavLink } from 'react-router-dom'; // use NavLink instead of Link

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-medium'
      : 'text-gray-500 hover:text-blue-600';

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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
